import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import * as data from 'src/app/core/config/config';
import { CarouselItem } from 'src/app/core/models/config.model';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

import SwiperCore, { Navigation, Pagination } from 'swiper/core';
SwiperCore.use([Navigation, Pagination]);
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {}
  dataCarousel: CarouselItem[] = data.dataCarousel;
  thumbsSwiper: any;
  openDialog(youtubeVideoIdTrailer: string) {
    this.dialog.open(DialogComponent, {
      data: {
        youtubeVideoIdTrailer,
      },panelClass: "dialog_trailer", autoFocus: false
    });
  }
}
