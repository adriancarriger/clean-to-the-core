/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';

import { StickyScrollComponent } from './sticky-scroll.component';
import { GlobalEventsService } from '../../core/global-events.service';

@Injectable()
export class MockGlobalEventsService {
  events$;
  constructor() {
    this.events$ = new Subject();
  }
  resize() {
    return this.events$.asObservable();
  }
  scroll() {
    return this.events$.asObservable();
  }
  update() {
    this.events$.next(1);
  }
}

describe('StickyScrollComponent', () => {
  let component: StickyScrollComponent;
  let fixture: ComponentFixture<StickyScrollComponent>;
  let mockEvents = new MockGlobalEventsService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: GlobalEventsService, useValue: mockEvents },
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
    mockEvents.update();
    expect(component.fixed).toBe(true);
  });

  it('should remove fixed style', () => {
    let newPosition: string;
    // Set fixed
    component.stickyOffset = -50;
    fixture.detectChanges();
    mockEvents.update();
    expect(component.fixed).toBe(true);
    // Remove fixed
    component.stickyOffset = 50;
    fixture.detectChanges();
    mockEvents.update();
    expect(component.fixed).toBe(false);
  });

  it('should destroy the component', () => {
    component.stickyOffset = -50;
    fixture.detectChanges();
    mockEvents.update();
    expect(component.fixed).toBe(true);
    component.ngOnDestroy();
    fixture.detectChanges();
    expect(component.fixed).toBe(false);
  });
});
