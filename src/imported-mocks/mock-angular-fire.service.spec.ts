import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';

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
  private mockArray = [
    {
      id: '02342',
      slug: 'test-slug-1',
      title: 'test title 1'
    },
    {
      id: '48825',
      slug: 'test-slug-2',
      title: 'test title 2'
    },
    {
      id: '23675',
      slug: 'test-slug-3',
      title: 'test title 3'
    }
  ];
  constructor() {
    this.recipeList$ = new Subject();
    this.update();
  }
  update() {
    this.recipeList$.next(this.mockArray);
  }
}
