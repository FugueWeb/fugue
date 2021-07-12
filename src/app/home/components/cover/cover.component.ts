import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss'],
})
export class CoverComponent implements OnInit, AfterViewInit {
  readonly BASE_PATH = '/assets/images/cover/';

  images: string[] = ['cover_front.jpg', 'three_images.jpg', 'cover_back.jpg'];
  slideIndex = 1;

  constructor() {}
  ngAfterViewInit(): void {
    this.carousel();
  }

  carousel() {
    var x = document.getElementsByClassName('item');
    for (let i = 0; i < x.length; i++) {
      (x[i] as any).style.display = 'none';
    }
    this.slideIndex++;
    if (this.slideIndex > x.length) {
      this.slideIndex = 1;
    }
    (x[this.slideIndex - 1] as any).style.display = 'block';
    setTimeout(() => this.carousel(), 10000);
  }

  ngOnInit(): void {}

  getImagePath(imageName: string): string {
    return this.BASE_PATH + imageName;
  }
}
