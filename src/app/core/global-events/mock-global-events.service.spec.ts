import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Injectable()
export class MockGlobalEventsService {
  events$;
  constructor() {
    this.events$ = new Subject();
  }
  resize() {
    return this.events$.asObservable();
  }
  scroll() {
    return this.events$.asObservable();
  }
  update() {
    this.events$.next(1);
  }
}
