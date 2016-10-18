import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { WatchHeightDirective } from './watch-height.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [LayoutComponent],
  declarations: [NavComponent, FooterComponent, LayoutComponent, WatchHeightDirective]
})
export class CoreModule { }
