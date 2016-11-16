/**
 * @module HomeModule
 */ /** */
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { ApiService } from '../core/api/api.service';
import { WatchHeightDirective } from '../shared/watch-height/watch-height.directive';
/**
 * @whatItDoes Returns the {@link HomeComponent} view.
 * @consumers {@link HomeModule},  {@link HomeRoutingModule}
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  /**
   * Data that is bound to the filter pipe. It can pass through filter data and get back data
   * that tells how many results were found after filtering.
   */
  filteredMeta = {
    searchFields: [],
    prefilter: (x, i) => i !== 0
  };
  /**
   * Object containing filter data.
   */
  filterValues: any;
  /**
   * The height of the `.fixed-content` element. Used to offset the scrolling content in the
   * `.home-content` element.
   */
  fixedHeight: number;
  /**
   * Timestamp of the last filter update.
   * 
   * -Needed to alert pipes of updates. Pure pipes won't notice a change inside an object.
   */
  stamp: number;
  /**
   * A reference to the component that helps the {@link FilterComponent} stick to the top of the page
   */
  stickyScroll: ElementRef;
  /**
   * Reference to the {@link WatchHeightDirective} which enables manually calling the directive's
   * functions.
   */
  @ViewChild(WatchHeightDirective) wh: WatchHeightDirective;
  /**
   * Creates the {@link HomeComponent}
   * @param apiService the api used to get data for the recipe
   */
  constructor(private apiService: ApiService) { }
  /**
   * Updates search fields from api
   */
  ngOnInit() {
    this.apiService.filterOptions.subscribe(options => {
      this.filteredMeta.searchFields = options.search.searchFields;
      this.stamp = new Date().getTime();
    });
  }
}
