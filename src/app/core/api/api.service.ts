import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class ApiService {
  public recipeList: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
    this.recipeList = af.database.list('client/recipeList');
  }
}
