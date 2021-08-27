import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';

@NgModule({
  declarations: [AddMovieComponent, UpdateMovieComponent],
  imports: [CommonModule, MoviesRoutingModule],
})
export class MoviesModule {}
