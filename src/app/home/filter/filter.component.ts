/**
 * @module HomeModule
 */ /** */
import { Component, ElementRef, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';

import { GlobalEventsService } from '../../core/global-events/global-events.service';
import { FilterOptions } from './filter-options';
import { FilterUtilitiesService } from './filter-utilities.service';
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
   * Option to prevent {@link onScroll} default behaviour.
   */
  dontCloseOnScroll = false;
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
   * Optional filter items.
   * 
   * - Filter by search
   * - Filter by select boxes (array)
   */
  @Input() filterOptions: FilterOptions;
  /**
   * Contains filter information usually sent to a pipe for filtering data.
   */
  filterValues = {};
  /**
   * Emits the time during an update to trigger pipes relying on an {@link update} event.
   */
  @Output() time = new EventEmitter();
  /**
   * Emits the {@link filterValues} object.
   */
  @Output() update = new EventEmitter();
  /**
   * Creates the {@link FilterComponent}
   * @param el a reference to the FilterComponent element
   * @param filterUtilitiesService used for simple utility functions.
   * @param globalEventsService used to subscribe to global events like scroll
   */
  constructor(
    private el: ElementRef,
    private filterUtilitiesService: FilterUtilitiesService,
    private globalEventsService: GlobalEventsService,
    @Inject('Window') private window: Window) { }
  /**
   * Subscribes to the global scroll event.
   * Triggers an update with init data
   */
  ngOnInit() {
    this.globalEventsService.scroll().subscribe( () => this.onScroll() );
    this.onUpdate();
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
    if (this.drawerOpen) {
      this.dontCloseOnScroll = true;
      this.window.scrollTo(0, this.getOffsetTop() + this.window.pageYOffset);
    }
    this.drawerEvent.emit();
  }
  /**
   * Called on scroll.
   * - Default: closes the drawer and emits a drawer event
   * - {@link dontCloseOnScroll} allows to skip the default behaviour
   * - sends a drawer event via the {@link drawerEvent} output.
   */
  onScroll() {
    if (this.dontCloseOnScroll) {
      this.dontCloseOnScroll = false;
    } else {
      this.drawerOpen = false;
      this.drawerEvent.emit();
    }
  }
  /**
   * Triggered on an update from a select input.
   * 
   * - Turns the human name into a camelcase key
   * - Attaches the new value to the key
   * - Send the data via {@link onUpdate}
   */
  onSelectUpdate(name: string, value) {
    let camelName = this.filterUtilitiesService.camelize(name);
    this.filterValues[camelName] = value;
    this.onUpdate();
  }
  /**
   * Triggered on an update from all inputs
   * 
   * - Emits the current filter values
   * - Emits the current time to trigger pure pipes
   */
  onUpdate() {
    let timestamp = new Date().getTime();
    this.update.emit(this.filterValues);
    this.time.emit( timestamp );
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
