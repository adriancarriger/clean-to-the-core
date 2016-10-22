/* tslint:disable:no-unused-variable */
import { Component, Injectable } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs/Rx';

import { GlobalEventsService } from './global-events.service';
import { WatchHeightDirective } from './watch-height.directive';

@Component({
  template: `<div [style.height]="heightInput" (heightChange)="testOutput = $event" appWatchHeight></div>`
})
export class ContainerComponent {
  heightInput = '101px';
  testOutput;
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
  update() {
    this.events$.next(1);
  }
}

describe('Directive: WatchHeight', () => {
  let fixture: ComponentFixture<ContainerComponent>;
  let mockEvents = new MockGlobalEventsService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: GlobalEventsService, useValue: mockEvents }
      ],
      declarations: [ContainerComponent, WatchHeightDirective]
    })
    .compileComponents();
  }));

  beforeEach( () => {
    fixture = TestBed.createComponent(ContainerComponent);
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should emit the inital height', () => {
    let newValue = fixture.componentInstance.testOutput;
    expect(newValue).toBe(0);
  });

  it('should emit an updated height', done => {
    mockEvents.update();
    setTimeout( () => { // Wait for height to update
      let newValue = fixture.componentInstance.testOutput;
      expect(newValue).toBe(101);
      done();
    }, 500);
  });
});
