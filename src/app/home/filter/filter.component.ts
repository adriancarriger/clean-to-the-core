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
  drawerOpen = false;
  @Output() drawerEvent = new EventEmitter();
  constructor(private globalEventsService: GlobalEventsService) { }
  ngOnInit() {
    this.globalEventsService.scroll().subscribe( () => this.drawerOpen = false);
  }
}
