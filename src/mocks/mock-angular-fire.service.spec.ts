import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';

import { MockApiData } from '../app/core/api/mock-api-data.spec';

@Injectable()
export class MockAngularFire {
  recipeList$;
  database = {
    list: (input: string) => {
      return this.recipeList$.asObservable();
    },
    object: (input: string) => {
      return this.recipeList$.asObservable();
    }
  };
  private mockArray: Array<Object>;
  constructor() {
    this.mockArray = MockApiData;
    this.recipeList$ = new Subject();
    this.update();
  }
  update() {
    this.recipeList$.next(this.mockArray);
  }
}
