import { AfterViewInit, Component, ElementRef, HostBinding } from '@angular/core';

import { StatusBarService } from './status-bar.service';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss']
})
export class StatusBarComponent implements AfterViewInit {
  @HostBinding('style.top') top = '0';
  constructor(
    private elementRef: ElementRef,
    private statusBarService: StatusBarService) { }

  ngAfterViewInit() {
    let height = this.elementRef.nativeElement.clientHeight;
    setTimeout(() => this.top = `-${height}px`);
    this.statusBarService.setBarHeight(height);
  }
}
