/**
 * @module HomeModule
 * @preferred
 */ /** */
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { FilterComponent } from './filter/filter.component';
import { RecipeAdComponent } from './recipe-ad/recipe-ad.component';
import { SharedModule } from '../shared/shared.module';
import { StickyScrollComponent } from './sticky-scroll/sticky-scroll.component';
/**
 * @whatItDoes Lazy loaded feature module for the home page.
 * @consumers {@link AppRoutingModule} (on demand)
 */
@NgModule({
  imports: [
    HomeRoutingModule,
    SharedModule
  ],
  declarations: [HomeComponent, FilterComponent, StickyScrollComponent, RecipeAdComponent, StickyScrollComponent]
})
export class HomeModule { }
