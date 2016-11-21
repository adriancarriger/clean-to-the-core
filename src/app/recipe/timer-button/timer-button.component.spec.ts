/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TimerButtonComponent } from './timer-button.component';
import { SharedModule } from '../../shared/shared.module';
import { TimerService } from '../../core/timer/timer.service';
import { MockTimerService } from '../../core/timer/mock-timer.service.spec';

describe('TimerButtonComponent', () => {
  let component: TimerButtonComponent;
  let fixture: ComponentFixture<TimerButtonComponent>;
  let mockTimerService: MockTimerService;
  beforeEach(async(() => {
    mockTimerService = new MockTimerService();
    TestBed.configureTestingModule({
      imports: [ SharedModule ],
      declarations: [ TimerButtonComponent ],
      providers: [
        { provide: TimerService, useValue: mockTimerService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
