import { Component, OnInit } from '@angular/core';
import { IAlbum, Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-definition',
  templateUrl: './definition.component.html',
  styleUrls: ['./definition.component.css'],
})
export class DefinitionComponent implements OnInit {
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
    // open lightbox
    this._lightbox.open(this.images, index, {
      wrapAround: true,
      showImageNumberLabel: true,
    });
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }
}
