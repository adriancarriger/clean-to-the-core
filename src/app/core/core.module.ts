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
import { throwIfAlreadyLoaded } from './module-import-guard';
import { NavComponent } from './nav/nav.component';
import { SharedModule } from '../shared/shared.module';
/**
 * @whatItDoes {@link CoreModule} exists to make commonly used singleton services and single-use classes available
 * for use in the many other modules.
 * @consumers {@link AppModule}
 * 
 * This module follows the Angular style guide [STYLE 04-11](https://angular.io/styleguide#04-11)
 */
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [LayoutComponent],
  declarations: [FooterComponent, NavComponent, LayoutComponent]
})
export class CoreModule {
  /**
   * The root {@link AppModule} imports the {@link CoreModule} and adds the `providers` to the {@link AppModule}
   * providers. Recommended in the
   * [Angular 2 docs - CoreModule.forRoot](https://angular.io/docs/ts/latest/guide/ngmodule.html#core-for-root)
   */
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
   * Prevent reimport of CoreModule
   * [STYLE 04-11](https://angular.io/styleguide#04-12)
   * @param parentModule will be `null` if {@link CoreModule} is not reimported by another module,
   * otherwise it will throw an error.
   * @see [Angular 2 docs - Prevent reimport of the CoreModule](https://angular.io/docs/ts/latest/guide/ngmodule.html#prevent-reimport) 
   */
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
