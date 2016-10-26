/**
 * @module HomeModule
 * @preferred
 */ /** */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
/**
 * @whatItDoes Lazy loaded feature module for the home page.
 * @consumers {@link AppRoutingModule} (on demand)
 */
@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
