import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';

import { CurrentStatus } from './current-status.interface';

@Injectable()
export class StatusBarService {
  animate = false;
  active = false;
  currentStatus: CurrentStatus = { route: null, height: 0 };
  status: ReplaySubject<CurrentStatus> = new ReplaySubject();
  private transformActive: number;
  constructor(
    private router: Router) {
    this.onInit();
  }
  onInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentStatus.route = event.url;
        this.updateStatus();
      }
    });
  }
  setActive(newValue: boolean) {
    if (newValue !== this.active) {
      this.animate = true;
      setTimeout(() => {
        this.animate = false;
      }, 1001);
    }
    this.active = newValue;
    this.updateStatus();
  }
  setBarHeight(newHeight) {
    this.transformActive = newHeight;
    this.updateStatus();
  }
  updateStatus() {
    this.currentStatus.height = this.active ? this.transformActive : 0;
    this.status.next(this.currentStatus);
  }
}
