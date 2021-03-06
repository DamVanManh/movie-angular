import { ComponentsModule } from 'src/app/components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieListRoutingModule } from './movie-list-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, MovieListRoutingModule, ComponentsModule],
})
export class MovieListModule {}
