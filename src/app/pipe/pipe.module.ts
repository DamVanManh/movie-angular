import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShorcutPipe } from './shorcut.pipe';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [ShorcutPipe, SafePipe],
  imports: [CommonModule],
  exports: [ShorcutPipe, SafePipe],
})
export class PipeModule {}
