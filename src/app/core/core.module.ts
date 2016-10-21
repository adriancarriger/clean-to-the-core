import { NgModule, Optional, SkipSelf } from '@angular/core';
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
  providers: [
    { provide: 'Window', useValue: window },
    GlobalEventsService
  ],
  exports: [LayoutComponent],
  declarations: [NavComponent, FooterComponent, LayoutComponent, WatchHeightDirective]
})
export class CoreModule {

  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
