/**
 * @module CoreModule
 * @preferred
 */ /** */
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GlobalEventsService } from './global-events.service';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { NavComponent } from './nav/nav.component';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { WatchHeightDirective } from './watch-height.directive';
/**
 * This module follows the Angular style guide [STYLE 04-11](https://angular.io/styleguide#04-11)
 */
@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [LayoutComponent],
  declarations: [FooterComponent, NavComponent, LayoutComponent, WatchHeightDirective]
})
export class CoreModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        GlobalEventsService,
        { provide: 'Window', useValue: window }
      ]
    };
  }
  /**
   * Prevent Reimport of Core Module
   * [STYLE 04-11](https://angular.io/styleguide#04-12)
   */
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
