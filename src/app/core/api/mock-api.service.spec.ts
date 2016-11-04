import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Injectable()
export class MockApiService {
  events$;
  data = {
    id: 0,
    blurb: 'blurb text'
  };
  constructor() {
    this.events$ = new Subject();
  }
  recipe(input) {
    this.update();
    return this.events$.asObservable();
  }
  slugToId(slug: string): Promise<string> {
    return new Promise((resolve, reject) => {
      resolve('02');
    });
  }
  update() {
    this.events$.next(this.data);
  }
}
