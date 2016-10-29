/**
 * @module SharedModule
 * @preferred
 */ /** */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCoverComponent } from './image-cover/image-cover.component';
import { LabelsComponent } from './labels/labels.component';
import { WatchHeightDirective } from './watch-height/watch-height.directive';
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
  declarations: [
    ImageCoverComponent,
    LabelsComponent,
    WatchHeightDirective
  ],
  exports: [
    ImageCoverComponent,
    LabelsComponent,
    WatchHeightDirective
  ]
})
export class SharedModule { }
