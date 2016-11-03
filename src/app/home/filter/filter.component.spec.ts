/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';

import { FilterComponent } from './filter.component';
import { GlobalEventsService } from '../../core/global-events.service';
import { SharedModule } from '../../shared/shared.module';

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

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;
  let mockEvents = new MockGlobalEventsService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ SharedModule ],
      declarations: [ FilterComponent ],
      providers: [
        { provide: GlobalEventsService, useValue: mockEvents }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
