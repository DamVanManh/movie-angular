import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TheaterRoutingModule } from './theater-routing.module';
import { TheaterComponent } from './theater.component';
import { PipeModule } from 'src/app/core/pipe/pipe.module';

@NgModule({
  declarations: [TheaterComponent],
  imports: [CommonModule, TheaterRoutingModule, PipeModule],
})
export class TheaterModule {}
