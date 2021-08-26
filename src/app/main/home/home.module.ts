import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MovieListComponent } from './movie-list/movie-list.component';

import { SwiperModule } from 'swiper/angular';
import { MaterialModule } from 'src/app/core/material/material.module';
import { MovieComponent } from './movie-list/movie/movie.component';

@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    MovieListComponent,
    MovieComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, SwiperModule, MaterialModule],
})
export class HomeModule {}
