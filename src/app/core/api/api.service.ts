/**
 * @module CoreModule
 */ /** */
import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { FilterOptions } from '../../home/filter/filter-options';
import { Observable } from 'rxjs';
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
  public recipes: FirebaseListObservable<Recipe[]>;
  public filterOptions: FilterOptionsObservable;
  constructor(public af: AngularFire) {
    this.recipes = af.database.list('client/recipes');
    this.filterOptions = af.database.object('client/filter');
  }
  /**
   * @returns the recipe associated with the slug
   * @param slug a unique string associated with a recipe
   */
  slugToRecipe(slug: string): RecipeObservable {
    return this.recipes
      .map(recipes => recipes.find(recipe => recipe.slug === slug));
  }
}

export interface FilterOptionsObservable extends FirebaseObjectObservable<FilterOptions> { }

export interface RecipeObservable extends Observable<Recipe> { }

export interface Recipe {
  id: string;
  slug: string;
  [propName: string]: any;
}
