/**
 * @module HomeModule
 */ /** */
import { Pipe, PipeTransform } from '@angular/core';

import { FilterUtilitiesService } from './filter-utilities.service';
/**
 * Filters data
 */
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  /**
   * Creates the {@link FilterPipe}
   * @param filterUtilitiesService used for simple utility functions.
   */
  constructor(
    private filterUtilitiesService: FilterUtilitiesService) { }
  /**
   * @param value input data
   * @param updateTime the timestamp of the last update. Needed because pure pipes do not
   * detect updates to object properties.
   * @param filterInput the filter input used to filter the input data.
   */
  transform(value: any, updateTime?: number, filterInput?: any): any {
    // console.log(value, updateTime, filterInput);
    return value;
  }

}
