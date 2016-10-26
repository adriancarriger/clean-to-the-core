/**
 * @module CoreModule
 */ /** */
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
/**
 * {@link GlobalEventsService} is reponsible for handling and dispatching global events such as
 * `window` resizing, `body` scrolling, etc.  
 */
@Injectable()
export class GlobalEventsService {
  /**
   * Creates {@link GlobalEventsService}
   * @param window `@Inject` is used to allow a mock window during testing
   * (following this [Stackover answer](http://stackoverflow.com/a/38875374/5357459)).
   */
  constructor(@Inject('Window') window: Window) { }
  /**
   * Allows a subscriber to listen to window resize events.
   */
  resize(): Observable<Event> {
    return Observable.fromEvent(window, 'resize');
  }

}
