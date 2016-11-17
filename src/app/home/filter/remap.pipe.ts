import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remap'
})
export class RemapPipe implements PipeTransform {

  transform(value: any, mapTo = 'default'): any {
    if (value === null || value === undefined) { return; }
    return value.sort((a, b) => a.order[mapTo] > b.order[mapTo]);
  }
}
