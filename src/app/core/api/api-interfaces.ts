import { FirebaseObjectObservable } from 'angularfire2';
import { Observable } from 'rxjs';

import { FilterOptions } from '../../home/filter/filter-options';

export interface Recipe {
  id: string;
  slug: string;
  [propName: string]: any;
}

export interface RecipeObservable extends Observable<Recipe> { }

export interface FilterOptionsObservable extends FirebaseObjectObservable<FilterOptions> { }



