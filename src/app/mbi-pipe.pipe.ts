import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mbiPipe'
})
export class MbiPipePipe implements PipeTransform {

  transform(value: string): string {
    if (value.length == 11) {
      return value.slice(0, 4) + '-' + value.slice(4, 7) + '-' + value.slice(7, 11);
    } else {
      return value;
    }
  }

}
