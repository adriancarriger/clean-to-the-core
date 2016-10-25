/**
 * @module RecipeModule
 * @preferred
 */ /** */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RecipeComponent } from './recipe.component';
import { RecipeRoutingModule } from './recipe-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RecipeRoutingModule
  ],
  declarations: [RecipeComponent]
})
export class RecipeModule { }
