/**
 * @module HomeModule
 */ /** */
import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
/**
 * Sorts data
 */
@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  /**
   * Sorts the input `value`.
   *  
   * @param value input data
   * @param sortBy the field of each item compared during sort
   * @param sortType can be 'number', 'date' or 'string'. Defaults to number.
   * @param desc the order to return the results. Defaults to true.
   */
  transform (value: any, sortBy: string, sortType = 'number', desc = true) {
    if (value === undefined || value === null) { return; }
    return value.sort((a, b) => this[sortType + 'Sort'](a[sortBy], b[sortBy], desc));
  }
  /* tslint:disable:no-unused-variable */
  /**
   * Sort by date using format: 'MM/DD/YYYY'
   */
  dateSort(a, b, desc) {
    a = this.dateToStamp(a);
    b = this.dateToStamp(b);
    return this.numberSort(a, b, desc);
  }
  /* tslint:enable:no-unused-variable */
  /**
   * Convert human readable date to a timestamp
   */
  dateToStamp(date: string): number {
    if (date === '') { return moment().valueOf(); }
    return moment(date, 'MM/DD/YYYY').valueOf();
  }
  /**
   * Sorts by number
   */
  private numberSort(a, b, desc) {
    return desc ? b - a : a - b;
  }
  /* tslint:disable:no-unused-variable */
  /**
   * Sorts by string
   */
  private stringSort(a, b, desc) {
    return desc ? b > a : a > b;
  }
  /* tslint:enable:no-unused-variable */
}
