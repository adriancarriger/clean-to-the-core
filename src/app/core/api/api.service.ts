/**
 * @module CoreModule
 */ /** */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FilterOptionsObservable, Recipe, RecipeObservable } from './api-interfaces';
import { FirebaseCacheService } from './firebase-cache.service';
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
  /**
   * Observable of about data.
   */
  about: Observable<{}>;
  /**
   * Observable of a list of recipes.
   */
  recipes: Observable<Recipe[]>;
  /**
   * Observable of filter options. Used to set up the {@link FilterComponent}
   */
  filterOptions: FilterOptionsObservable;
  /**
   * Observable of the latest recipe published.
   */
  latest: RecipeObservable;
  /**
   * Creates the {@link ApiService}
   * @param fbCache Firebase cache service used to connect to Firebase and cache for offline use
   */
  constructor(
    private fbCache: FirebaseCacheService) {
    this.onInit();
  }
  /**
   * Called when creating the service.
   */
  onInit() {
    this.about = this.fbCache.object('client/about');
    this.recipes = this.fbCache.list('client/recipes', {
      query: {
        orderByChild: 'revStamp'
      }
    });
    this.filterOptions = this.fbCache.object('client/filter');
    this.latest = this.recipes.pluck('0');
  }
  /**
   * @returns the recipe associated with the slug
   * @param slug a unique string associated with a recipe
   */
  slugToRecipe(slug: string): RecipeObservable {
    return this.fbCache.object(`client/recipes/${slug}`);
  }
}
