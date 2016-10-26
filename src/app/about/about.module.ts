/**
 * @module AboutModule
 * @preferred
 */ /** */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
/**
 * @whatItDoes Lazy loaded feature module for the about page.
 * @consumers @consumers {@link AppRoutingModule} (on demand)
 */
@NgModule({
  imports: [
    AboutRoutingModule,
    CommonModule
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }
