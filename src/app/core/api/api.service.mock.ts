import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Injectable()
export class ApiServiceMock {
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
  update() {
    this.events$.next(this.data);
  }
}