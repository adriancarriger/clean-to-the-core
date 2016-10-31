/**
 * @module HomeModule
 */ /** */
import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
  Renderer,
} from '@angular/core';

import { GlobalEventsService } from '../../core/global-events.service';
/**
 * @whatItDoes Sets the host element to fixed to top when it reaches the top
 * @consumers {@link FilterComponent}
 */
@Directive({
  selector: '[appStickyScroll]'
})
export class StickyScrollDirective implements AfterViewInit, OnDestroy, OnInit {
  /**
   * An additional amount of px that must be scrolled before sticking takes effect
   */
  @Input() stickyOffset: number;
  /**
   * Sets the `top` style to 0
   */
  @HostBinding('style.top') topStyle = 0;
  /**
   * Sets the `right` style to 0
   */
  @HostBinding('style.right') rightStyle = 0;
  /**
   * Sets the `left` style to 0
   */
  @HostBinding('style.left') leftStyle = 0;
  /**
   * Sets the `z-index` style to 10
   */
  @HostBinding('style.z-index') zIndexStyle = 10;
  /**
   * Set to `true` if the host element should be fixed to the top of the screen.
   */
  private fixed: boolean = false;
  /**
   * The minimum number of pixels that should be scrolled before {@link fixed} is set to `true`.
   */
  private minScroll: number;
  /**
   * Subscriptions to observables that need to be unsubscribed when the {@link ngOnDestroy}
   * lifecycle hook is called.
   */
  private subscriptions = {
    resize: null,
    scroll: null
  };
  /**
   * Creates the {@link StickyScrollDirective}
   * @param globalEventsService provides a subscription to global events
   * @param el the reference to the host element
   * @param renderer used to make DOM changes to the host element
   */
  constructor(
    private globalEventsService: GlobalEventsService,
    private element: ElementRef,
    private renderer: Renderer) { }
  /**
   * An Angular 2 [lifecyle hook](https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html)
   * called once, after Angular initializes the host component's views and child views.
   * - Gets the {@link minScroll} distance
   * - Wrapped in `setTimeout` to manually trigger a new digest cycle
   */
  ngAfterViewInit() {
    setTimeout( () => {
    this.getDimensions();
    }, 0);
  }
  /**
   * An Angular 2 [lifecyle hook](https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html)
   * called once, just before Angular destroys the directive/component.
   * - Unsubscribes from global events
   * - Removes fixed styling if it exists
   */
  ngOnDestroy() {
    this.subscriptions.resize.unsubscribe();
    this.subscriptions.scroll.unsubscribe();
    if (this.fixed) {
      this.removeSticky();
      this.fixed = false;
    }
  }
  /**
   * An Angular 2 [lifecyle hook](https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html)
   * called once, after the first ngOnChanges.
   * - Subscribes to global resize and scroll events.
   */
  ngOnInit() {
    this.subscriptions.resize = this.globalEventsService.resize().subscribe(data => {
      this.getDimensions();
    });
    this.subscriptions.scroll = this.globalEventsService.scroll().subscribe( () => {
      this.updatePosition();
    });
  }
  /**
   * Sets host element to `position: fixed`
   */
  private addSticky() {
    this.renderer.setElementStyle(this.element.nativeElement, 'position', 'fixed');
    this.renderer.setElementStyle(
      document.documentElement, 'margin-top',
      this.element.nativeElement.clientHeight + 'px');
  }
  /**
   * Get dimensions related to fixing the host element.
   * 
   * 1. Remove fixed `position: fixed` (if fixed) to get original position from top
   * 2. Get the minimum scroll distance from the elements position from the top and any offset
   * distance given via {@link stickyOffset}
   * 3. Then update the position which  will immediately restore `position: fixed` if appropriate
   */
  private getDimensions() {
    if (this.fixed) { this.removeSticky(); }
    this.minScroll = this.element.nativeElement.offsetTop + Number( this.stickyOffset );
    this.updatePosition();
  }
  /**
   * Removes fixed position
   */
  private removeSticky() {
    this.renderer.setElementStyle(this.element.nativeElement, 'position', null);
    this.renderer.setElementStyle(document.documentElement, 'margin-top', null);
  }
  /**
   * Checks if the host element should be fixed
   */
  private updatePosition() {
    if (document.body.scrollTop >= this.minScroll) {
      this.fixed = true;
      this.addSticky();
    } else {
      this.fixed = false;
      this.removeSticky();
    }
  }
}
