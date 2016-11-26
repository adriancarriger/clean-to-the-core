import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
  @HostBinding('attr.role') role = 'alert';
  @HostBinding('attr.aria-busy') busy = 'true';
  @HostBinding('attr.aria-label') label = 'loading indicator for dynamic content';
}
