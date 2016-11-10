/**
 * @module CoreModule
 */ /** */
import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { FilterOptions } from '../../home/filter/filter-options';
/**
 * @whatItDoes Reponsible for returning data from an API.
 * @consumers {@link HomeComponent}, {@link RecipeComponent}, {@link RecipeAdComponent}
 * @providerScope {@link AppComponent}
 * 
 * --------------------------------------------------------
 * --------------------------------------------------------
 * 
 * **Features:**
 * - Currently uses Firebase
 * - Consumers don't need to know which API is used to get the data.
 * - Could easily switch to use another API in the future without changing any of the API
 * consumers. 
 */
@Injectable()
export class ApiService {
  public recipes: FirebaseListObservable<any[]>;
  public filterOptions: FilterOptionsObservable;
  constructor(public af: AngularFire) {
    this.recipes = af.database.list('client/recipes');
    this.filterOptions = af.database.object('client/filter');
  }
  /**
   * Gets an observable with recipe data.
   * @param id the unique recipe id or slug used to identify the requested recipe data.
   */
  recipe(key: number): RecipeObservable {
    return this.af.database.object(`client/recipes/${key}`);
  }
  /**
   * @returns the recipe associated with the slug
   * @param slug a unique string associated with a recipe
   */
  slugToRecipe(slug: string): Promise<RecipeObservable> {
    return new Promise((resolve, reject) => {
      this.recipes.subscribe(items => {
        items.forEach( (item, index) => {
          if (item['slug'] === slug) {
            resolve( this.recipe(index) );
          }
        });
      });
    });
  }
}

export interface FilterOptionsObservable extends FirebaseObjectObservable<FilterOptions> { }

export interface RecipeObservable extends FirebaseObjectObservable<Recipe> { }

export interface Recipe {
  id: string;
  slug: string;
  [propName: string]: any;
}
