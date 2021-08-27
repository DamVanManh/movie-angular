import { MovieDetailComponent } from './movie-detail.component';
import { ShowTimesComponent } from './show-times/show-times.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { MovieDetailRoutingModule } from './movie-detail-routing.module';

@NgModule({
  declarations: [BannerComponent, ShowTimesComponent, MovieDetailComponent],
  imports: [CommonModule, MovieDetailRoutingModule],
})
export class MovieDetailModule {}
