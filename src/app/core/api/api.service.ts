/**
 * @module CoreModule
 */ /** */
import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
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
  public recipeList: FirebaseListObservable<any[]>;
  constructor(public af: AngularFire) {
    this.recipeList = af.database.list('client/recipeList');
  }
  /**
   * Gets an observable with recipe data.
   * @param id the unique recipe id or slug used to identify the requested recipe data.
   */
  recipe(id: string): FirebaseObjectObservable<Recipe> {
    return this.af.database.object(`client/recipes/${id}`);
  }
  /**
   * @returns the id associated with the slug
   * @param slug a unique string associated with a recipe
   */
  slugToId(slug: string): Promise<string> {
    return new Promise((resolve, reject) => {
      this.recipeList.subscribe(items => {
        items.forEach(item => {
          if (item['slug'] === slug) {
            resolve( item['id'] );
          }
        });
      });
    });
  }
}

export interface Recipe {
  id: string;
  slug: string;
  [propName: string]: any;
}
