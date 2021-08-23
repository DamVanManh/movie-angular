import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorcut',
})
export class ShorcutPipe implements PipeTransform {
  transform(value: any): any {
    return value.substr(0, 10) + '...'; // cắt chuỗi nếu quá dài và hiển thị ...
  }
}
