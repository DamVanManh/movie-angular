
import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  youtubeVideoIdTrailer: string;
}
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class DialogComponent implements OnInit {
  url: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.url = `https://www.youtube.com/embed/${this.data.youtubeVideoIdTrailer}?autoplay=1`;
  }
  ngOnInit(): void {}
}
