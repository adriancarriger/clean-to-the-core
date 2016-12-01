/**
 * @module CoreModule
 */ /** */
import { Observable } from 'rxjs';

import { FilterOptions } from '../../home/filter/filter-options';
/**
 * Interface for individual recipe items
 */
export interface Recipe {
  id: string;
  slug: string;
  [propName: string]: any;
}
/**
 * An Observable of a `Recipe`.
 */
export interface RecipeObservable extends Observable<Recipe> { }
/**
 * An Observable of `FilterOptions`
 */
export interface FilterOptionsObservable extends Observable<FilterOptions> { }



