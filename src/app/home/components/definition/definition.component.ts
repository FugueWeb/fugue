import { Component, OnInit } from '@angular/core';
import { IAlbum, Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-definition',
  templateUrl: './definition.component.html',
  styleUrls: ['./definition.component.css'],
})
export class DefinitionComponent implements OnInit {
  // Add to something like "Image Service"
  images: IAlbum[] = [
    {
      src: '/assets/images/definition/fugue1.jpg',
      thumb: '/assets/images/definition/fugue1.jpg',
    },
    {
      src: '/assets/images/definition/fugue2.jpg',
      thumb: '/assets/images/definition/fugue2.jpg',
    },
    {
      src: '/assets/images/definition/score1.jpg',
      thumb: '/assets/images/definition/score1.jpg',
    },
  ];

  constructor(private _lightbox: Lightbox) {}
  ngOnInit(): void {}

  openImage(index: number): void {
    this._lightbox.open(this.images, index, {
      wrapAround: true,
      showImageNumberLabel: false,
    });
  }

  close(): void {
    this._lightbox.close();
  }
}
