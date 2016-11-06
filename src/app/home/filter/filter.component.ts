/**
 * @module HomeModule
 */ /** */
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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
  constructor(private globalEventsService: GlobalEventsService) { }
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
}
