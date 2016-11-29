import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';

import { MockApiData } from './mock-api-data.spec';

@Injectable()
export class MockFirebaseCacheService {
  recipeList$;
  input;
  private mockArray: Array<Object>;
  constructor() {
    this.mockArray = MockApiData;
    this.recipeList$ = new Subject();
    this.update();
  }
  list(input: string, query?) {
    return this.recipeList$.asObservable();
  }
  object(input: string) {
    this.input = input;
    return this.recipeList$.asObservable();
  }
  update() {
    let nextObj;
    if (this.input === 'client/recipes/slug-2') {
      nextObj = this.mockArray[1];
    } else {
      nextObj = this.mockArray;
    }
    this.recipeList$.next(nextObj);
  }
}
