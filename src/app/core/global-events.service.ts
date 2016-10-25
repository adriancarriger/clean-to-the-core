/**
 * @module CoreModule
 */ /** */

import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class GlobalEventsService {

  constructor(@Inject('Window') window: Window) { }

  resize() {
    return Observable.fromEvent(window, 'resize');
  }

}
