import { Injectable } from '@angular/core';

import { StatusBarService } from '../status-bar/status-bar.service';

@Injectable()
export class TimerService {
  running = false;
  timeLeft = 0;
  interval;
  constructor(
    public statusBarService: StatusBarService) { }
  startTimer(timerObj) {
    if (!this.running) {
      this.setupTimer(timerObj);
      this.statusBarService.setBarHeight(23);
    }
  }
  private setupTimer(timerObj) {
    this.timeLeft = 60 * (timerObj.exactly || timerObj.short);
    this.running = true;
    this.statusBarService.setActive(true);
    this.interval = setInterval(() => this.onEachInterval(), 1000);
  }
  private onEachInterval() {
     this.timeLeft--;
      if (this.timeLeft === 0) {
        this.onTimerEnd();
      }
  }
  private onTimerEnd() {
    clearInterval(this.interval);
    this.statusBarService.setActive(false);
    this.running = false;
  }
}
