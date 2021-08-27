import { PipeModule } from './../pipe/pipe.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MovieComponent } from './movie/movie.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DialogComponent, MovieComponent],
  imports: [CommonModule, MatDialogModule, PipeModule, RouterModule],
  exports: [DialogComponent, MovieComponent],
})
export class ComponentsModule {}
