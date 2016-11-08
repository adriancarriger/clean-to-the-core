/**
 * @module HomeModule
 */ /** */
export interface FilterOptions {
  search: boolean;
  nonSearch?: Array<SearchOption>;
}

export interface SearchOption {
  name: String;
  options?: Array<string>;
  type: String;
}
