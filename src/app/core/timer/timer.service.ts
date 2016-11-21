import { Injectable } from '@angular/core';

import { StatusBarService } from '../status-bar/status-bar.service';

@Injectable()
export class TimerService {
  running = false;
  timeLeft = 0;
  interval: NodeJS.Timer;
  readable: string;
  constructor(
    public statusBarService: StatusBarService) { }
  startTimer(timerObj) {
    if (!this.running) {
      this.setupTimer(timerObj);
    }
  }
  private setupTimer(timerObj) {
    this.timeLeft = 60 * (timerObj.exactly || timerObj.short);
    this.updateReadable();
    this.running = true;
    this.statusBarService.setActive(true);
    this.interval = setInterval(() => this.onEachInterval(), 1000);
  }
  private onEachInterval() {
     this.timeLeft--;
     this.updateReadable();
      if (this.timeLeft === 0) {
        this.onTimerEnd();
      }
  }
  private onTimerEnd() {
    clearInterval(this.interval);
    this.statusBarService.setActive(false);
    this.running = false;
  }
  /**
   * http://stackoverflow.com/a/11486026/5357459
   */
  private updateReadable() {
    let hrs = Math.floor(this.timeLeft / 3600);
    let mins = Math.floor((this.timeLeft % 3600) / 60);
    let secs = this.timeLeft % 60;
    let ret = '';
    if (hrs > 0) {
      ret += '' + hrs + ':' + (mins < 10 ? '0' : '');
    }
    ret += '' + mins + ':' + (secs < 10 ? '0' : '');
    ret += '' + secs;
    this.readable = ret;
  }
}
