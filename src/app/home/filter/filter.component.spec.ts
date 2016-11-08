/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';

import { FilterComponent } from './filter.component';
import { FilterUtilitiesService } from './filter-utilities.service';
import { GlobalEventsService } from '../../core/global-events/global-events.service';
import { MockGlobalEventsService } from '../../core/global-events/mock-global-events.service.spec';
import { SharedModule } from '../../shared/shared.module';
import { MockWindowService } from '../../../mocks/mock-window.service.spec';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;
  let mockGlobalEventsService = new MockGlobalEventsService();
  let mockWindowService = new MockWindowService();
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ SharedModule ],
      declarations: [ FilterComponent ],
      providers: [
        FilterUtilitiesService,
        { provide: GlobalEventsService, useValue: mockGlobalEventsService },
        { provide: 'Window', useValue: mockWindowService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    mockWindowService.pageYOffset = 0;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close drawer on scroll', () => {
    component.drawerOpen = true;
    expect(component.drawerOpen).toBe(true);
    mockGlobalEventsService.update();
    expect(component.drawerOpen).toBe(false);
  });

  it('should close drawer on scroll', () => {
    component.dontCloseOnScroll = true;
    component.drawerOpen = true;
    expect(component.dontCloseOnScroll).toBe(true);
    expect(component.drawerOpen).toBe(true);
    mockGlobalEventsService.update();
    expect(component.drawerOpen).toBe(true);
    expect(component.dontCloseOnScroll).toBe(false);
  });

  it('should open the drawer', () => {
    document.body.style.height = '900px';
    document.body.style.margin = '132px';
    expect(component.drawerOpen).toBe(false);
    component.onDrawerToggle();
    fixture.detectChanges();
    expect(mockWindowService.pageYOffset).toBe(132);
    expect(component.drawerOpen).toBe(true);
    document.body.style.height = '0';
    document.body.style.margin = '0';
  });

  it('should close the drawer', () => {
    component.drawerOpen = true;
    fixture.detectChanges();
    expect(component.drawerOpen).toBe(true);
    component.onDrawerToggle();
    fixture.detectChanges();
    expect(mockWindowService.pageYOffset).toBe(0);
    expect(component.drawerOpen).toBe(false);
  });

  it('should update select values', () => {
    component.onSelectUpdate('Test name here', 'new value 1');
    fixture.detectChanges();
    let filterValues = component.filterValues;
    let thisValue = filterValues['testNameHere'];
    expect(thisValue).toBe('new value 1');
  });
});
