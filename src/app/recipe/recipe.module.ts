/**
 * @module RecipeModule
 * @preferred
 */ /** */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RecipeComponent } from './recipe.component';
import { RecipeRoutingModule } from './recipe-routing.module';
/**
 * @whatItDoes Lazy loaded feature module for the recipe page.
 * @consumers {@link AppRoutingModule} (on demand)
 */
@NgModule({
  imports: [
    CommonModule,
    RecipeRoutingModule
  ],
  declarations: [RecipeComponent]
})
export class RecipeModule { }
