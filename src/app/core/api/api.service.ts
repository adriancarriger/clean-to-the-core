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
  recipe(id: string): FirebaseObjectObservable<any> {
    return this.af.database.object(`client/recipes/${id}`);
  }
}
