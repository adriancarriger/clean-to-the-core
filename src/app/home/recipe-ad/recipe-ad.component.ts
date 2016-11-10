/**
 * @module HomeModule
 */ /** */
import {  Component, Input } from '@angular/core';
/**
 * @whatItDoes Displays a single recipe ad item.
 * @consumers {@link HomeModule}
 */
@Component({
  selector: 'app-recipe-ad',
  templateUrl: './recipe-ad.component.html',
  styleUrls: ['./recipe-ad.component.scss']
})
export class RecipeAdComponent {
  /**
   * The arrow color for the `.blurb`.
   */
  @Input() arrowColor;
  /**
   * Base data for the recipe including `id` and `title`.
   */
  @Input() recipe;
}
