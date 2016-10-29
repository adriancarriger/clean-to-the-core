/**
 * @module UiModule
 * @preferred
 */ /** */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SelectComponent } from './select/select.component';
import { TextComponent } from './text/text.component';
/**
 * @whatItDoes {@link UiModule} exists to hold the common user interface methods that offers a
 * consistant look and api to the rest of the app.
 * 
 * Input API
 * - `.get()` returns the current value
 * - `.set(newValue)` sets the input to a new value
 * - `(update)="newValue"` EventEmitter for all updates 
 * 
 * Features:
 * - All input items have the same api
 */
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SelectComponent,
    TextComponent
  ],
  exports: [
    SelectComponent,
    TextComponent
  ]
})
export class UiModule { }
