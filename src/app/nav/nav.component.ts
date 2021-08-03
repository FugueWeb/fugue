import { BookmarkService } from './../services/bookmark.service';
import { ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';

/** @title Responsive sidenav */
@Component({
  selector: 'fugue-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnDestroy, OnInit {
  mobileQuery: MediaQueryList;

  isAlreadyBookmarked = false;

  get isChapter() {
    return this.router.url.includes('chapter');
  }

  toggleBookmark() {
    this.bookmarkService.toggleBookmarkByRoute(this.router.url);
    this.isAlreadyBookmarked = this.isAlreadyBookmarked ? false : true;
    this.cd.detectChanges();
  }
  navItemsPart1 = [
    {
      routerLink: '/chapter/prelude/1',
      text: 'PRELUDE',
    },
  ];

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private router: Router,
    private titleService: Title,
    private activatedRoute: ActivatedRoute,
    private readonly cd: ChangeDetectorRef,
    private readonly bookmarkService: BookmarkService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          this.isAlreadyBookmarked = this.bookmarkService.isAlreadyBookmarked(
            this.router.url
          );
          this.cd.detectChanges();
        })
      )
      .subscribe(() => {});

    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let child = this.activatedRoute.firstChild;
          while (child) {
            if (child.firstChild) {
              child = child.firstChild;
            } else if (child.snapshot.data && child.snapshot.data['title']) {
              return child.snapshot.data['title'];
            } else {
              return null;
            }
          }
          return null;
        })
      )
      .subscribe((data: any) => {
        if (data) {
          this.titleService.setTitle(data);
        }
      });
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }
}
