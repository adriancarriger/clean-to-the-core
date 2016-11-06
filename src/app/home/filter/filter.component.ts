/**
 * @module HomeModule
 */ /** */
import { Component, ElementRef, EventEmitter, Inject, OnInit, Output } from '@angular/core';

import { GlobalEventsService } from '../../core/global-events/global-events.service';
/**
 * @whatItDoes Returns a filter bar that filters recipes
 * @consumers {@link HomeComponent}
 */
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  /**
   * Ouputs events related to the drawer opening/closing.
   */
  @Output() drawerEvent = new EventEmitter();
  /**
   * Current state of the drawer.
   * 
   * - The drawer is div that shows/hides extra filter options
   * - Set to closed by default
   */
  drawerOpen = false;
  /**
   * Creates the {@link FilterComponent}
   * @param globalEventsService used to subscribe to global events like scroll
   */
  constructor(
    private el: ElementRef,
    private globalEventsService: GlobalEventsService,
    @Inject('Window') private window: Window) { }
  /**
   * Subscribes to the global scroll event.
   * 
   * **On scroll:**
   * - closes the drawer
   * - sends a drawer event via the {@link drawerEvent} output.
   */
  ngOnInit() {
    this.globalEventsService.scroll().subscribe( () => {
      this.drawerOpen = false;
      this.drawerEvent.emit();
    });
  }
  /**
   * Called when the drawer is toggled.
   * **It:**
   * - toggles the drawer state
   * - emits a drawer event
   * - unscrolls the page when the drawer opens
   */
  onDrawerToggle() {
    this.drawerOpen = !this.drawerOpen;
    this.drawerEvent.emit();
    if (this.drawerOpen) {
      this.window.scrollTo(0, this.getOffsetTop());
    }
  }
  /**
   * Gets the total offset top of the component element.
   */
  private getOffsetTop(): number {
    let el = this.el.nativeElement;
    // http://stackoverflow.com/a/10564748/5357459
    let offset = 0;
    while (el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop)) {
      offset += el.offsetTop - el.scrollTop;
      el = el.offsetParent;
    }
    return offset;
  }
}
