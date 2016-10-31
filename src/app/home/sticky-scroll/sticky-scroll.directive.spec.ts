/* tslint:disable:no-unused-variable */
import { Component, Injectable } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs/Rx';

import { GlobalEventsService } from '../../core/global-events.service';
import { StickyScrollDirective } from './sticky-scroll.directive';

@Component({
  template: `<div *ngIf="show" [stickyOffset]="offset" appStickyScroll></div>`
})
export class ContainerComponent {
  show = true;
  offset = 0;
}

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

describe('Directive: StickyScroll', () => {
  let component: ContainerComponent;
  let fixture: ComponentFixture<ContainerComponent>;
  let mockEvents = new MockGlobalEventsService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: GlobalEventsService, useValue: mockEvents },
        { provide: 'Window', useValue: window }
      ],
      declarations: [ContainerComponent, StickyScrollDirective]
    })
    .compileComponents();
  }));

  beforeEach( () => {
    fixture = TestBed.createComponent(ContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should set style to fixed', () => {
    component.offset = -50;
    fixture.detectChanges();
    mockEvents.update();
    let newPosition: string = fixture.nativeElement.firstElementChild.style.position;
    expect(newPosition).toBe('fixed');
  });

  it('should remove fixed style', () => {
    let newPosition: string;
    // Set fixed
    component.offset = -50;
    fixture.detectChanges();
    mockEvents.update();
    newPosition = fixture.nativeElement.firstElementChild.style.position;
    expect(newPosition).toBe('fixed');
    // Remove fixed
    component.offset = 50;
    fixture.detectChanges();
    mockEvents.update();
    newPosition = fixture.nativeElement.firstElementChild.style.position;
    expect(newPosition).toBe('');
  });

  it('should destroy the component', () => {
    component.show = false;
    fixture.detectChanges();
  });

});
