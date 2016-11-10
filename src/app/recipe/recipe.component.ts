/**
 * @module RecipeModule
 */ /** */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService, RecipeObservable } from '../core/api/api.service';
/**
 * @whatItDoes Returns the {@link RecipeComponent} view.
 * @consumers {@link RecipeModule}, {@link RecipeRoutingModule}
 */
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  /**
   * Data used in the recipe view.
   */
  recipe: RecipeObservable;
  /**
   * Creates the {@link RecipeComponent}
   * @param activatedRoute provides a snapshot of the current route including the url slug
   * @param apiService provides data for the current recipe
   */
  constructor (
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService) { }
  /**
   * Gets the current recipe slug on init
   */
  ngOnInit() {
    let slug: string = this.activatedRoute.snapshot.params['slug'];
    this.recipe = this.apiService.slugToRecipe(slug);
  }
}
