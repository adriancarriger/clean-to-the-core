/**
 * @module AboutModule
 * @preferred
 */ /** */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UiModule } from '../ui/ui.module';
/**
 * @whatItDoes Lazy loaded feature module for the about page.
 * @consumers @consumers {@link AppRoutingModule} (on demand)
 */
@NgModule({
  imports: [
    AboutRoutingModule,
    CommonModule,
    SharedModule,
    UiModule
  ],
  declarations: [ AboutComponent ]
})
export class AboutModule { }
