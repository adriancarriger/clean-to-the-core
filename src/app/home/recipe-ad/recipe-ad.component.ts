/**
 * @module HomeModule
 */ /** */
import {  Component, Input, OnInit } from '@angular/core';

import { ApiService } from '../../core/api/api.service';
/**
 * @whatItDoes Displays a single recipe ad item.
 * @consumers {@link HomeModule}
 */
@Component({
  selector: 'app-recipe-ad',
  templateUrl: './recipe-ad.component.html',
  styleUrls: ['./recipe-ad.component.scss']
})
export class RecipeAdComponent implements OnInit {
  /**
   * The arrow color for the `.blurb`.
   */
  @Input() arrowColor;
  /**
   * Base data for the recipe including `id` and `title`.
   */
  @Input() recipeMeta;
  /**
   * Data used to display the recipe.
   */
  recipe;
  /**
   * Creates the {@link RecipeAdComponent}
   * @param apiService the api used to get data for the recipe
   */
  constructor(private apiService: ApiService) { }
  /**
   * Gets the `recipe` data from the api on init
   */
  ngOnInit() {
    this.apiService.recipe(this.recipeMeta.id).subscribe(recipe => {
      this.recipe = recipe;
    });
  }
}
