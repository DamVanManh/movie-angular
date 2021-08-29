import { ComponentsModule } from 'src/app/components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CoverFlowMovieComponent } from './cover-flow-movie/cover-flow-movie.component';

import { SwiperModule } from 'swiper/angular';
import { MaterialModule } from 'src/app/core/material/material.module';

@NgModule({
  declarations: [HomeComponent, CarouselComponent, CoverFlowMovieComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SwiperModule,
    MaterialModule,
    ComponentsModule,
  ],
})
export class HomeModule {}
