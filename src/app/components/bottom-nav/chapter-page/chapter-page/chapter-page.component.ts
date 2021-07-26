import { Component, OnInit } from '@angular/core';
import prelude from 'src/assets/data/prelude.json';

import SwiperCore, { Pagination } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);

@Component({
  selector: 'app-chapter-page',
  templateUrl: './chapter-page.component.html',
  styleUrls: ['./chapter-page.component.scss'],
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

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {}
}
