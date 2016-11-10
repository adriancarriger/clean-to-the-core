/**
 * @module HomeModule
 */ /** */
import { Pipe, PipeTransform } from '@angular/core';

import { FilterUtilitiesService } from './filter-utilities.service';
import { StopWords } from './stop-words';
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
   * Filters the input `value` according to the `filteredInput`.
   *  
   * @param value input data
   * @param updateTime the timestamp of the last update. Needed because pure pipes do not
   * detect updates to object properties
   * @param filterInput the filter input used to filter the input data
   * @param filteredMeta.searchFields an input for the searchable fields of the value items
   * @param filteredMeta.count the total results returned by the transform
   * @param filteredMeta.query a readable list of the the active filter items
   */
  transform(value: any, updateTime?: number, filterInput?: any, filteredMeta?: any): any {
    if (value === undefined || value === null) {
      filteredMeta.count = -1; // filter not active
      return;
    }
    let queries: Array<string> = [];
    let filtering = this.filtering(filterInput, filteredMeta);
    if (!filtering.any) {
      filteredMeta.count = -1; // filter not active
      return value;
    }
    if (filtering.search) {
      // Treat each word as a query and normalize to lowercase
      let rawQueries: Array<string> = filterInput.search.toLowerCase().split(' ');
      // Remove stop words
      queries = this.removeStopWords( rawQueries );
      if (queries.length === 0) { filtering.search = false; }
    }
    // Meta data used to filter each item in the input `value`.
    let meta = {
      input: filterInput,
      queries: queries,
      checkSearch: filtering.search,
      searchFields: filteredMeta.searchFields
    };
    let filtered = value.filter(item => this.filterItem(item, meta));
    filteredMeta.count = filtered.length;
    filteredMeta.query = this.readableQueries(filterInput);
    return filtered;
  }
  /**
   * Checks if the filterInput is trying to filter anything at all.
   */
  private filtering(filterInput, filteredMeta) {
    let status = {
      any: false,
      search: false
    };
    if (filterInput === undefined || filterInput === {}) { return status; }
    for (let key in filterInput) {
      if (key === 'search') {
        if (filterInput[key] !== '' && filteredMeta.searchFields.length > 0) {
          status.search = true;
        }
      } else {
        if (filterInput[key] !== 'all') { status.any = true; }
      }
    }
    if (status.search === true) { status.any = true; }
    return status;
  }
  /**
   * The actual filter logic applied to each item.
   * 
   * - Filters out non search queries first (e.g. select box queries)
   * - If filtering by search, then it finds the searchable text and checks if it matches
   * any queries.
   */
  private filterItem(item: Object, meta) {
    // filter by select boxes
    for (let key in meta.input) {
      // Skip search 
      if (key === 'search') { continue; }
      // If filtering by this type then filter out any items that don't match
      if (meta.input[key] !== 'all' && item[key] !== meta.input[key]) { return; }
    }
    // filter by search terms
    if (meta.checkSearch) {
      let searchable: string; // this string contains searchable text
      meta.searchFields.forEach(searchField => {
        if (item[searchField] !== undefined) {
          searchable += ' ' + item[searchField];
        }
      });
      searchable = searchable.toLowerCase();
      for (let i = 0 ; i < meta.queries.length; i++) {
        if (searchable.indexOf( meta.queries[i] ) === -1) { return; }
      }
    }
    return item;
  }
  /**
   * Converts queries into a readable list.
   */
  private readableQueries(filterInput): string {
    let defaults = ['', 'all'];
    let filterBy: Array<string> = [];
    // non search filter
    for (let key in filterInput) {
      if (defaults.indexOf(filterInput[key]) === -1) {
        filterBy.push( filterInput[key] );
      }
    }
    return this.readableList(filterBy);
  }
  /**
   * Converts an array into a readable list
   */
  private readableList(list: Array<string>) {
    let readable = '';
    list.forEach((rawItem: string, i: number) => {
      let item: string = rawItem.toLowerCase();
      if (i === 0) {
        readable = '"' + item + '"';
      } else if (list.length === i + 1) {
        readable += ', and "' + item + '"';
      } else {
        readable += ', "' + item + '"';
      }
    });
    return readable;
  }
  /**
   * Removes stop words from queries.
   */
  private removeStopWords(queries: Array<string>): Array<string> {
    return queries.filter((item) => {
      return this.stopWords().indexOf(item) === -1;
    });
  }
  /**
   * Returns the current stop words.
   */
  private stopWords(): Array<string> {
    return StopWords;
  }
}
