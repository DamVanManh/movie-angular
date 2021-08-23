import { PipeModule } from './../pipe/pipe.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [DialogComponent],
  imports: [CommonModule, MatDialogModule, PipeModule],
  exports: [DialogComponent],
})
export class ComponentsModule {}
