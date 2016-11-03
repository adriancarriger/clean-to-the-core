/**
 * @module HomeModule
 */ /** */
import { Component, EventEmitter, Output } from '@angular/core';
/**
 * @whatItDoes Returns a filter bar that filters recipes
 * @consumers {@link HomeComponent}
 */
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  drawerOpen = false;
  @Output() drawerEvent = new EventEmitter();
}
