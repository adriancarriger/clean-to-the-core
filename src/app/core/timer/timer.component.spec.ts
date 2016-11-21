/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TimerComponent } from './timer.component';
import { TimerService } from './timer.service';
import { MockTimerService } from './mock-timer.service.spec';

import { StatusBarService } from '../../core/status-bar/status-bar.service';

describe('TimerComponent', () => {
  let component: TimerComponent;
  let fixture: ComponentFixture<TimerComponent>;
  let mockTimerService: MockTimerService;
  beforeEach(async(() => {
    mockTimerService = new MockTimerService();
    TestBed.configureTestingModule({
      declarations: [ TimerComponent ],
      providers: [
        StatusBarService,
        TimerService,
        { provide: TimerService, useValue: mockTimerService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
