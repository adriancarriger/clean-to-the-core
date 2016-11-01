import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

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
