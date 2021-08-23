import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieComponent } from './movie.component';
import { BannerComponent } from './banner/banner.component';
import { ShowTimesComponent } from './show-times/show-times.component';


@NgModule({
  declarations: [MovieComponent, BannerComponent, ShowTimesComponent],
  imports: [
    CommonModule,
    MovieRoutingModule
  ]
})
export class MovieModule { }
