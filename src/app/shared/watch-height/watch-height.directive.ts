/**
 * @module CoreModule
 */ /** */
import { AfterViewInit, Directive, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';

import { GlobalEventsService } from '../../core/global-events.service';
/**
 * Emits the host's height `OnInit` and when the window resizes.
 */
@Directive({
  selector: '[appWatchHeight]'
})
export class WatchHeightDirective implements AfterViewInit, OnInit {
  /**
   * Event emitter output. Emits the pixle hieght of the {@link WatchHeightDirective}'s height.
   */
  @Output() heightChange: EventEmitter<string> = new EventEmitter();
  /**
   * Creates the {@link WatchHeightDirective}
   * @param el the reference to the host element
   */
  constructor(
    private el: ElementRef,
    private events: GlobalEventsService) { }
  /**
   * An Angular 2 [lifecyle hook](https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html)
   * called once, after Angular initializes the host component's views and child views.
   * - Sends the inital height of the host element
   */
  ngAfterViewInit() {
    this.updateHeight();
  }
  /**
   * An Angular 2 [lifecyle hook](https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html)
   * called once, after the first ngOnChanges.
   * - Sends the inital height of the host element
   * - Initiats listening to window resize events
   */
  ngOnInit() {
    this.updateHeight();
    this.listenToResize();
  }
  /**
   * Subscribes to the {@link GlobalEventsService}'s window resize `EventEmitter`.
   */
  private listenToResize() {
    this.events.resize().subscribe( () => {
      this.updateHeight();
    });
  }
  /**
   * Emits the height of the host element via the {@link heightChange} `@Output`.
   */
  private updateHeight() {
    this.heightChange.emit( this.el.nativeElement.clientHeight );
  }
}
