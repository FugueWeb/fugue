import { TitleKey } from './../models/part-titles';
import { SoundcloudTrack } from './soundcloud.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface PageIdentifier {
  title: TitleKey;
  page: number;
}

export type BookmarkKey = `${TitleKey}_${number}`;

export const buildBookmarkKey = (page: PageIdentifier): BookmarkKey => {
  return `${page.title}_${page.page}` as const;
};

export interface Bookmark extends PageIdentifier {
  timestamp: Date;
}

export type BookmarkMap = Partial<Record<BookmarkKey, Bookmark>>;
export type UnsafeBookmarkMap = Partial<Record<BookmarkKey | string, Bookmark>>;

@Injectable({
  providedIn: 'root',
})
export class BookmarkService {
  static BOOKMARK_STORAGE_KEY = 'FUGUE_BOOKMARKS';

  private bookmarkMap: BookmarkMap = {};

  private readonly bookmarkMapSubject = new BehaviorSubject<BookmarkMap>({});
  bookmarkMap$ = this.bookmarkMapSubject.asObservable();

  constructor() {
    this.loadBookmarksFromLocalStorage();
  }

  toggleBookmarkByRoute(url: string) {
    if (!url.includes('chapter')) {
      return;
    }
    const parts = url.split('/');

    const chapterName = parts[2];
    const chapterPage = Number(parts[3]);
    const key = buildBookmarkKey({
      page: chapterPage,
      title: chapterName as TitleKey,
    });

    const item = (this.bookmarkMap as UnsafeBookmarkMap)[key];
    if (item) {
      this.removeBookmark(key);
      return;
    }
    this.setBookmark({ page: chapterPage, title: chapterName as TitleKey });
  }

  toggleBookmark(page: PageIdentifier) {
    const key = buildBookmarkKey(page);
    const item = (this.bookmarkMap as UnsafeBookmarkMap)[key];
    if (item) {
      this.removeBookmark(key);
      return;
    }
    this.setBookmark(page);
  }

  setBookmark(page: PageIdentifier) {
    const key = buildBookmarkKey(page);
    (this.bookmarkMap as UnsafeBookmarkMap)[key] = {
      ...page,
      timestamp: new Date(),
    };
    this.bookmarkMapSubject.next(this.bookmarkMap);
    this.saveBookmarkMapToLocalStorage();
  }

  getBookmark(key: BookmarkKey): Bookmark | undefined {
    return (this.bookmarkMap as UnsafeBookmarkMap)[key];
  }

  removeBookmark(key: BookmarkKey) {
    (this.bookmarkMap as UnsafeBookmarkMap)[key] = undefined;
    this.bookmarkMapSubject.next(this.bookmarkMap);
    this.saveBookmarkMapToLocalStorage();
  }

  isAlreadyBookmarked(url: string) {
    if (!url.includes('chapter')) {
      return false;
    }
    const parts = url.split('/');
    const chapterName = parts[2];
    const chapterPage = Number(parts[3]);

    const bookmark = this.getBookmark(
      buildBookmarkKey({ page: chapterPage, title: chapterName as TitleKey })
    );
    return bookmark != undefined;
  }

  private getBookmarkKeyByUrl() {}

  private saveBookmarkMapToLocalStorage() {
    localStorage.setItem(
      BookmarkService.BOOKMARK_STORAGE_KEY,
      JSON.stringify(this.bookmarkMap)
    );
  }

  private loadBookmarksFromLocalStorage() {
    let parsedMap = {};
    try {
      parsedMap =
        JSON.parse(
          localStorage.getItem(BookmarkService.BOOKMARK_STORAGE_KEY) ?? '{}'
        ) ?? {};
    } finally {
      this.bookmarkMap = parsedMap;
      this.bookmarkMapSubject.next(this.bookmarkMap);
    }
  }
}
