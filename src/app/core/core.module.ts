import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GlobalEventsService } from './global-events.service';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { NavComponent } from './nav/nav.component';
import { WatchHeightDirective } from './watch-height.directive';

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

  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
