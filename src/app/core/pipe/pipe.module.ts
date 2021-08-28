import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShorcutPipe } from './shorcut.pipe';
import { SafePipe } from './safe.pipe';
import { StyleTheaterNamePipe } from './style-theater-name.pipe';

@NgModule({
  declarations: [ShorcutPipe, SafePipe, StyleTheaterNamePipe],
  imports: [CommonModule],
  exports: [ShorcutPipe, SafePipe, StyleTheaterNamePipe],
})
export class PipeModule {}
