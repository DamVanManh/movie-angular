import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  url: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: string) {
    this.url = `https://www.youtube.com/embed/${this.data}?autoplay=1`;
  }
  ngOnInit(): void {
    console.log('dữ liệu nhận ', this.data);
  }
}
