/**
 * @module HomeModule
 * @preferred
 */ /** */
import { NgModule } from '@angular/core';

import { FilterComponent } from './filter/filter.component';
import { FilterPipe } from './filter/filter.pipe';
import { FilterUtilitiesService } from './filter/filter-utilities.service';
import { RemapPipe } from './filter/remap.pipe';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { RecipeAdComponent } from './recipe-ad/recipe-ad.component';
import { StickyScrollComponent } from './sticky-scroll/sticky-scroll.component';
import { SharedModule } from '../shared/shared.module';
/**
 * @whatItDoes Lazy loaded feature module for the home page.
 * @consumers {@link AppRoutingModule} (on demand)
 */
@NgModule({
  imports: [
    HomeRoutingModule,
    SharedModule
  ],
  declarations: [
    FilterComponent,
    FilterPipe,
    HomeComponent,
    RecipeAdComponent,
    RemapPipe,
    StickyScrollComponent
  ],
  providers: [FilterUtilitiesService]
})
export class HomeModule { }
