import { Component, OnInit } from '@angular/core';
import * as data from 'src/app/core/config/config';
import { CarouselItem } from 'src/app/core/models/config.model';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper/core';
SwiperCore.use([Navigation, Pagination, Autoplay]);
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  dataCarousel: CarouselItem[] = data.dataCarousel;
  thumbsSwiper: any;
  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {}
  openDialog(youtubeVideoIdTrailer: string) {
    this.dialog.open(DialogComponent, {
      data: {
        youtubeVideoIdTrailer,
      },
      panelClass: 'dialog_trailer',
      autoFocus: false,
    });
  }
}
