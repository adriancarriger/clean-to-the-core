import { Injectable } from '@angular/core';
import { PushNotificationsService } from 'angular2-notifications';

import { StatusBarService } from '../status-bar/status-bar.service';

@Injectable()
export class TimerService {
  running = false;
  timeLeft = 0;
  interval: NodeJS.Timer;
  readable: string;
  id: string;
  slug: string;
  title = 'Clean to the Core';
  timerObj;
  constructor(
    public pushNotificationsService: PushNotificationsService,
    public statusBarService: StatusBarService) { }
  toggleTimer(timerObj, title, slug, id) {
    this.running ? this.stopTimer() : this.startTimer(timerObj, title, slug, id);
    if (this.pushNotificationsService.permission === 'default') {
      this.pushNotificationsService.requestPermission();
    }
  }
  startTimer(timerObj, title, slug, id) {
    this.id = id;
    this.title = title;
    this.slug = slug;
    this.timerObj = timerObj;
    this.timeLeft = 60 * (timerObj.exactly || timerObj.short);
    this.updateReadable();
    this.running = true;
    this.statusBarService.setActive(true);
    this.interval = setInterval(() => this.onEachInterval(), 1000);
  }
  stopTimer() {
    clearInterval(this.interval);
    this.statusBarService.setActive(false);
    this.running = false;
  }
  resetTimer() {
    this.timeLeft = 60 * (this.timerObj.exactly || this.timerObj.short);
    this.updateReadable();
  }
  changeMinute(change) {
    let newTime = this.timeLeft + (60 * change);
    if (newTime > 0) {
      this.timeLeft = newTime;
      this.updateReadable();
    }
  }

  private onEachInterval() {
     this.timeLeft--;
     this.updateReadable();
      if (this.timeLeft === 0) {
        this.onTimerComplete();
      }
  }

  private onTimerComplete() {
      let pushObj = {
        body: `Your timer for ${this.title} has finished.`,
        icon: 'assets/push-logo.png'
      };
      this.pushNotificationsService.create('Timer complete', pushObj).subscribe();
      this.stopTimer();
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
