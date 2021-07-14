import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-modal-dialog',
  templateUrl: './image-modal-dialog.component.html',
  styleUrls: ['./image-modal-dialog.component.css'],
})
export class ImageModalDialogComponent implements OnInit {
  @Input()
  imageUri: string | undefined;

  @Input()
  text: string = '';

  constructor() {}

  ngOnInit(): void {}
}
