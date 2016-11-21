import { Directive, HostBinding, Input, OnInit } from '@angular/core';

import { StatusBarService } from './status-bar.service';

@Directive({
  selector: '[appStatusBarAware]'
})
export class StatusBarAwareDirective implements OnInit {
  @Input() statusBarExclude: Array<string>;
  @HostBinding('style.transform') transform: string = null;
  @HostBinding('style.transition') transition: string;
  constructor(
    private statusBarService: StatusBarService) { }
  ngOnInit() {
    this.statusBarService.status.subscribe(status => {
      this.transform = this.barActive(status) ? `translate3d(0, ${status.height}px, 0)` : null;
      if (this.statusBarService.animate) {
        this.transition = '1s transform';
        setTimeout(() => this.transition = null, 1001);
      }
    });
  }
  barActive(status): boolean {
    let useRoute = !this.statusBarExclude || !this.statusBarExclude.includes(status.route);
    return useRoute && status.height > 0;
  }
}
