import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { WatchHeightDirective } from './watch-height.directive';
import { GlobalEventsService } from './global-events.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [LayoutComponent],
  declarations: [NavComponent, FooterComponent, LayoutComponent, WatchHeightDirective]
})
export class CoreModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        { provide: 'Window', useValue: window },
        GlobalEventsService
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
