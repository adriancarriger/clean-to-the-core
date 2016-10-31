/**
 * @module CoreModule
 */ /** */
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
/**
 * @whatItDoes Reponsible for handling and dispatching global events such as `window` resizing,
 * `body` scrolling, etc.
 * @consumers {@link WatchHeightDirective}
 * @providerContext {@link AppComponent}   
 */
@Injectable()
export class GlobalEventsService {
  /**
   * Creates the {@link GlobalEventsService}
   * @param window `@Inject` is used to allow a mock window during testing
   * (following this [Stackoverflow answer](http://stackoverflow.com/a/38875374/5357459)).
   */
  constructor(@Inject('Window') window: Window) { }
  /**
   * Allows a subscriber to listen to window resize events.
   */
  resize(): Observable<Event> {
    return Observable.fromEvent(window, 'resize');
  }
  /**
   * Allows a subscriber to listen to window resize events.
   */
  scroll(): Observable<Event> {
    return Observable.fromEvent(document, 'scroll');
  }
}
