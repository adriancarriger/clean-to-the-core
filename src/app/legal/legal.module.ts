/**
 * @module LegalModule
 * @preferred
 */ /**/
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LegalComponent } from './legal.component';
import { LegalRoutingModule } from './legal-routing.module';
/**
 * @whatItDoes Lazy loaded feature module for legal pages.
 * @consumers @consumers {@link AppRoutingModule} (on demand)
 */
@NgModule({
  imports: [
    LegalRoutingModule,
    CommonModule
  ],
  declarations: [LegalComponent]
})
export class LegalModule { }
