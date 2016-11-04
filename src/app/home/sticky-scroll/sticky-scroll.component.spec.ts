/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';

import { StickyScrollComponent } from './sticky-scroll.component';
import { GlobalEventsService } from '../../core/global-events/global-events.service';
import { MockGlobalEventsService } from '../../core/global-events/mock-global-events.service.spec';

describe('StickyScrollComponent', () => {
  let component: StickyScrollComponent;
  let fixture: ComponentFixture<StickyScrollComponent>;
  let mockGlobalEventsService = new MockGlobalEventsService();
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: GlobalEventsService, useValue: mockGlobalEventsService },
        { provide: 'Window', useValue: window }
      ],
      declarations: [ StickyScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StickyScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set style to fixed', () => {
    component.stickyOffset = -50;
    fixture.detectChanges();
    mockGlobalEventsService.update();
    expect(component.fixed).toBe(true);
  });

  it('should remove fixed style', () => {
    let newPosition: string;
    // Set fixed
    component.stickyOffset = -50;
    fixture.detectChanges();
    mockGlobalEventsService.update();
    expect(component.fixed).toBe(true);
    // Remove fixed
    component.stickyOffset = 50;
    fixture.detectChanges();
    mockGlobalEventsService.update();
    expect(component.fixed).toBe(false);
  });

  it('should destroy the component', () => {
    component.stickyOffset = -50;
    fixture.detectChanges();
    mockGlobalEventsService.update();
    expect(component.fixed).toBe(true);
    component.ngOnDestroy();
    fixture.detectChanges();
    expect(component.fixed).toBe(false);
  });
});
