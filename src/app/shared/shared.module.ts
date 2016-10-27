/**
 * @module SharedModule
 * @preferred
 */ /** */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCoverComponent } from './image-cover/image-cover.component';
/**
 * @whatItDoes {@link SharedModule} exists to hold the common components, directives, and pipes
 * and share them with the modules that need them.
 * @consumers {@link HomeModule}, {@link RecipeModule}
 * 
 * This module follows the Angular style guide [STYLE 04-10](https://angular.io/styleguide#04-10)
 */
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ ImageCoverComponent ],
  exports: [ ImageCoverComponent ]
})
export class SharedModule { }
