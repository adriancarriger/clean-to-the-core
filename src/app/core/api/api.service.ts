/**
 * @module CoreModule
 */ /** */
import { Injectable } from '@angular/core';
import {
  Angularfire2OfflineService,
  ListObservable,
  ObjectObservable } from 'angularfire2-offline';
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
  about: ObjectObservable;
  /**
   * Observable of a list of recipes.
   */
  recipes: ListObservable;
  /**
   * Observable of filter options. Used to set up the {@link FilterComponent}
   */
  filterOptions: ObjectObservable;
  /**
   * Observable of the latest recipe published.
   */
  latest: ObjectObservable;
  /**
   * Creates the {@link ApiService}
   * @param fbCache Firebase cache service used to connect to Firebase and cache for offline use
   */
  constructor(
    private fbCache: Angularfire2OfflineService) {
    this.onInit();
  }
  /**
   * Called when creating the service.
   * - Gets the required items from Firebase to use in the app
   */
  onInit() {
    this.about = this.fbCache.object('client/about');
    this.recipes = this.fbCache.list('client/recipes', {
      query: {
        orderByChild: 'revStamp'
      }
    }, 'slug');
    this.filterOptions = this.fbCache.object('client/filter');
    this.latest = this.recipes.pluck('0');
  }
  /**
   * @returns the recipe associated with the slug
   * @param slug a unique string associated with a recipe
   */
  slugToRecipe(slug: string): ObjectObservable {
    return this.fbCache.object(`client/recipes/${slug}`);
  }
}
