/**
 * @module HomeModule
 */ /** */
export interface FilterOptions {
  search: SearchOptions;
  nonSearch?: Array<NonSearchOption>;
}

export interface NonSearchOption {
  name: String;
  options?: Array<string>;
  type: String;
}

export interface SearchOptions {
  use: boolean;
  searchFields: Array<string>;
}
