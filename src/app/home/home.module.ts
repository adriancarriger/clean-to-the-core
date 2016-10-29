/**
 * @module HomeModule
 * @preferred
 */ /** */
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { FilterComponent } from './filter/filter.component';
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
  declarations: [HomeComponent, FilterComponent]
})
export class HomeModule { }
