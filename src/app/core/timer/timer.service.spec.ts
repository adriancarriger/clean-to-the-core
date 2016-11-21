/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';

import { TimerService } from './timer.service';
import { StatusBarService } from '../../core/status-bar/status-bar.service';
import { MockStatusBarService } from '../../core/status-bar/mock-status-bar.service.spec';

describe('Service: Timer', () => {
  let mockStatusBarService: MockStatusBarService;
  beforeEach(() => {
    mockStatusBarService = new MockStatusBarService();
    TestBed.configureTestingModule({
      providers: [
        TimerService,
        { provide: StatusBarService, useValue: mockStatusBarService }
      ]
    });
  });

  it('should create the service', inject([TimerService], (service: TimerService) => {
    expect(service).toBeTruthy();
  }));

  it('should start the timer', done => {
    inject([TimerService], (service: TimerService) => {
      let time = 2 / 60;
      let timerObj = { exactly: time};
      service.startTimer(timerObj);
      expect(service.running).toBe(true);
      expect(service.timeLeft).toBe(2);
      setTimeout(() => {
        expect(service.running).toBe(false);
        done();
      }, 2100);
    })();
  });

  it('should start the timer using the short time', done => {
    inject([TimerService], (service: TimerService) => {
      let short = 2 / 60;
      let long = 5 / 60;
      let timerObj = { short: short, long: long};
      service.startTimer(timerObj);
      expect(service.running).toBe(true);
      expect(service.timeLeft).toBe(2);
      setTimeout(() => {
        expect(service.running).toBe(false);
        done();
      }, 2100);
    })();
  });

  it('should not start the timer if it is already running', inject([TimerService], (service: TimerService) => {
    service.running = true;
    let time = 2 / 60;
    let timerObj = { exactly: time};
    service.startTimer(timerObj);
    expect(service.timeLeft).toBe(0);
  }));
});
