import { SoundcloudService } from './../../../../services/soundcloud.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import prelude from 'src/assets/data/prelude.json';

import SwiperCore, { Pagination } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);

export const JSON_HTML_LINK_CLASS = 'custom__link';
export const JSON_HTML_DATA_TYPE_ATTRIBUTE = 'data-type';
export const JSON_HTML_DATA_LINK_PARAM_ATTRIBUTE = 'data-link-param';

export type CustomLinkDataType = 'new_window' | 'track' | 'map';

@Component({
  selector: 'app-chapter-page',
  templateUrl: './chapter-page.component.html',
  styleUrls: ['./chapter-page.component.scss'],
  encapsulation: ViewEncapsulation.None, // Needed to apply css for inserted html
})
export class ChapterPageComponent implements OnInit {
  pageData: {
    [rootTitle: string]: {
      [pageTitle: string]:
        | {
            page: string;
          }
        | { [title: string]: string };
    };
  } = prelude as any;

  // Example data
  pages = prelude.prelude.prelude as Array<any>;

  constructor(private readonly soundcloudService: SoundcloudService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.registerClickHandlersForInsertedHtml();
  }

  private registerClickHandlersForInsertedHtml() {
    const htmlItems = document.getElementsByClassName(JSON_HTML_LINK_CLASS);

    for (let i = 0; i < htmlItems.length; i++) {
      const element = htmlItems[i] as HTMLAnchorElement;
      this.registerClickHandlerForElement(element);
    }
  }

  private registerClickHandlerForElement(element: HTMLElement) {
    const linkType = element.getAttribute(
      JSON_HTML_DATA_TYPE_ATTRIBUTE
    ) as CustomLinkDataType;
    const linkParam = element.getAttribute(JSON_HTML_DATA_LINK_PARAM_ATTRIBUTE);
    switch (linkType) {
      case 'track': {
        console.log(
          `Adding Event Listener to open track with name ${linkParam}`
        );
        element.addEventListener('click', () => {
          this.soundcloudService.openSoundcloudLink(linkParam as string);
        });
        break;
      }
      default:
        console.warn(`Did not match ${linkType}`);
    }
  }
}
