/* tslint:disable:no-unused-variable */
import { Component, Injectable } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalEventsService } from '../../core/global-events/global-events.service';
import { MockGlobalEventsService } from '../../core/global-events/mock-global-events.service.spec';
import { FilterPipe } from './filter.pipe';
import { FilterUtilitiesService } from './filter-utilities.service';

@Component({
  template: `{{data | filter}}`
})
export class ContainerComponent {
  data;
}

describe('Pipe: Filter', () => {
  let fixture: ComponentFixture<ContainerComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        FilterUtilitiesService
      ],
      declarations: [ContainerComponent, FilterPipe]
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
});
