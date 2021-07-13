import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss'],
})
export class CoverComponent implements OnInit, AfterViewInit {
  readonly BASE_PATH = '/assets/images/cover/';

  readonly IMAGE_CSS_CLASS = 'carousel__image';
  readonly CSS_ANIMATION_DURATION = 10000;

  images: string[] = ['cover_front.jpg', 'three_images.jpg', 'cover_back.jpg'];

  get carouselImageElements() {
    return document.getElementsByClassName(
      this.IMAGE_CSS_CLASS
    ) as HTMLCollectionOf<HTMLElement>;
  }

  slideIndex = 0;

  constructor() {}
  ngAfterViewInit(): void {
    this.carousel();
  }

  /**
   * Starts The Carousel
   */
  carousel() {
    this.hideAllImages();
    this.nextImage();
    setTimeout(() => this.carousel(), this.CSS_ANIMATION_DURATION);
  }

  /**
   * Hides all images of the carousel
   */
  hideAllImages() {
    [].forEach.call(this.carouselImageElements, (item: HTMLElement) => {
      item.style.display = 'none';
    });
  }
  /**
   * Slides to the next image in the carousel
   */
  nextImage() {
    if (this.slideIndex >= this.carouselImageElements.length) {
      this.slideIndex = 0;
    }
    this.carouselImageElements[this.slideIndex].style.display = 'block';
    this.slideIndex++;
  }

  ngOnInit(): void {}

  getImagePath(imageName: string): string {
    return this.BASE_PATH + imageName;
  }
}
