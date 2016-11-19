/**
 * @module RecipeModule
 * @preferred
 */ /** */
import { NgModule } from '@angular/core';
import { MomentModule } from 'angular2-moment';

import { RecipeComponent } from './recipe.component';
import { RecipeRoutingModule } from './recipe-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TimerButtonComponent } from './timer-button/timer-button.component';
/**
 * @whatItDoes Lazy loaded feature module for the recipe page.
 * @consumers {@link AppRoutingModule} (on demand)
 */
@NgModule({
  imports: [
    MomentModule,
    RecipeRoutingModule,
    SharedModule
  ],
  declarations: [RecipeComponent, TimerButtonComponent]
})
export class RecipeModule { }
