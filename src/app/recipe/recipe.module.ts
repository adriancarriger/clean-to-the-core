/**
 * @module RecipeModule
 * @preferred
 */ /** */
import { Ng2DisqusModule } from '../forks/ng2-disqus/ng2-disqus.module';
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
    Ng2DisqusModule,
    RecipeRoutingModule,
    SharedModule
  ],
  declarations: [RecipeComponent]
})
export class RecipeModule { }
