import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'styleTheaterName',
})
export class StyleTheaterNamePipe implements PipeTransform {
  constructor(private sanitized: DomSanitizer) {}

  transform(text: string) {
    let text1 = text.split('-');
    let output;
    output =
      `<span style='color: #8bc541; font-size: 16px'>${text1[0]}</span> - ` +
      `<span style='color: #fff; font-size: 14px'>${text1[1]}</span>`;
    return this.sanitized.bypassSecurityTrustHtml(output);
  }
}
