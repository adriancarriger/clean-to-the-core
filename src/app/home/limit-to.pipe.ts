import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitTo'
})
export class LimitToPipe implements PipeTransform {

  transform(value: any, limit: number): any {
    return value ? value.slice(0, limit) : [];
  }
}
