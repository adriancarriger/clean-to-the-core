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
   * The colors that are passed to each {@link RecipeAdComponenet} used for the blurb arrow color.
   */
  arrowColors: Array<string> = ['#7ab9d0', '#dae109', '#ff8b94', '#67d165'];
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
   * Cycles through the {@link arrowColors} based on the current index
   * @param index the index of the loop of recipes
   */
  getColor(index): string {
    let mod = index % this.arrowColors.length;
    return this.arrowColors[mod];
  }
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
