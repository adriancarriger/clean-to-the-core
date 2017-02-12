/**
 * @module CoreModule
 */ /** */
import { Observable } from 'rxjs/observable';

/**
 * Interface for individual recipe items
 */
export interface Recipe {
  id: string;
  slug: string;
  [propName: string]: any;
}
