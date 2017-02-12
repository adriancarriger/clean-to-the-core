/**
 * @module RecipeModule
 */ /** */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs/observable';
import { Subscription } from 'rxjs/subscription';

import { Recipe } from '../core/api/api-interfaces';
import { ApiService } from '../core/api/api.service';
/**
 * @whatItDoes Returns the {@link RecipeComponent} view.
 * @consumers {@link RecipeModule}, {@link RecipeRoutingModule}
 */
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnDestroy, OnInit {
  /**
   * Data used in the recipe view.
   */
  recipe: Observable<Recipe>;
  /**
   * 
   */
  routerSubscription: Subscription;
  /**
   * Creates the {@link RecipeComponent}
   * @param activatedRoute provides a snapshot of the current route including the url slug
   * @param apiService provides data for the current recipe
   */
  constructor (
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router) { }
  /**
   * 
   */
  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }
  /**
   * Gets the current recipe slug on init
   */
  ngOnInit() {
    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const slug: string = this.activatedRoute.snapshot.params['slug'];
        this.recipe = this.apiService.slugToRecipe(slug);
      }
    });
  }
}
