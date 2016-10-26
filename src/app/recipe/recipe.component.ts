/**
 * @module RecipeModule
 */ /** */
import { Component } from '@angular/core';
/**
 * @whatItDoes Returns the {@link RecipeComponent} view.
 * @consumers {@link RecipeModule}, {@link RecipeRoutingModule}
 */
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent { }
