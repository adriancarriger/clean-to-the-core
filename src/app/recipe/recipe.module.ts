/**
 * @module RecipeModule
 * @preferred
 */ /** */
import { NgModule } from '@angular/core';

import { RecipeComponent } from './recipe.component';
import { RecipeRoutingModule } from './recipe-routing.module';
import { SharedModule } from '../shared/shared.module';
/**
 * @whatItDoes Lazy loaded feature module for the recipe page.
 * @consumers {@link AppRoutingModule} (on demand)
 */
@NgModule({
  imports: [
    RecipeRoutingModule,
    SharedModule
  ],
  declarations: [RecipeComponent]
})
export class RecipeModule { }
