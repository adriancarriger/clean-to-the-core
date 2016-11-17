/**
 * @module HomeModule
 */ /** */
export interface FilterOptions {
  items: FilterItems;
  searchFields: Array<string>;
}

export interface FilterItems {
  [index: number]: {
    name: string;
    options: Array<string>;
    order?: {
      default: Number;
      [propName: string]: Number;
    };
    type: string;
  };
}
