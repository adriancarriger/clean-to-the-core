/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, DebugElement, Injectable, ViewChild } from '@angular/core';
import { Subject } from 'rxjs/Rx';

import { StickyScrollComponent } from './sticky-scroll.component';
import { GlobalEventsService } from '../../core/global-events/global-events.service';
import { MockGlobalEventsService } from '../../core/global-events/mock-global-events.service.spec';

@Component({
  template: `<app-sticky-scroll #stickyScroll [stickyOffset]="stickyOffset"></app-sticky-scroll>`
})
export class ContainerComponent {
  stickyOffset = 0;
  @ViewChild('stickyScroll') stickyScroll: StickyScrollComponent;
}

describe('StickyScrollComponent', () => {
  let component: ContainerComponent;
  let fixture: ComponentFixture<ContainerComponent>;
  let mockGlobalEventsService: MockGlobalEventsService;
  beforeEach(async(() => {
    mockGlobalEventsService = new MockGlobalEventsService();
    TestBed.configureTestingModule({
      providers: [
        { provide: GlobalEventsService, useValue: mockGlobalEventsService },
        { provide: 'Window', useValue: window }
      ],
      declarations: [ ContainerComponent, StickyScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.stickyScroll).toBeTruthy();
  });

  it('should set style to fixed', () => {
    component.stickyOffset = -50;
    fixture.detectChanges();
    mockGlobalEventsService.update();
    expect(component.stickyScroll.fixed).toBe(true);
  });

  it('should remove fixed style', () => {
    // Set fixed
    component.stickyOffset = -50;
    fixture.detectChanges();
    expect(component.stickyScroll.fixed).toBe(true);
    // Remove fixed
    component.stickyOffset = 50;
    fixture.detectChanges();
    expect(component.stickyScroll.fixed).toBe(false);
  });

  it('should destroy the component', () => {
    component.stickyOffset = -50;
    fixture.detectChanges();
    expect(component.stickyScroll.fixed).toBe(true);
    component.stickyScroll.ngOnDestroy();
    expect(component.stickyScroll.fixed).toBe(false);
  });

  it('should update the height on manuel check', done => {
    component.stickyScroll.height = 5;
    let positionContainer = fixture.nativeElement.getElementsByClassName('position-container')[0];
    positionContainer.style.height = '234px';
    expect(positionContainer.clientHeight).toBe(234);
    expect(component.stickyScroll.height).toBe(5);
    component.stickyScroll.manualHeightCheck();
    setTimeout( () => {
      expect(component.stickyScroll.height).toBe(234);
      done();
    }, 0);
  });
});
