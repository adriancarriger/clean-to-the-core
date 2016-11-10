/* tslint:disable:no-unused-variable */
import { Component, Injectable } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalEventsService } from '../../core/global-events/global-events.service';
import { MockGlobalEventsService } from '../../core/global-events/mock-global-events.service.spec';
import { FilterPipe } from './filter.pipe';
import { FilterUtilitiesService } from './filter-utilities.service';

@Component({
  template: ``
})
export class ContainerComponent {
  data = [
    {
      dataUrl: 'https://example.com/slug-1',
      id: 1,
      name: 'Ron Swanson',
      party: 'libertarian',
      slug: 'slug-1',
      text: 'this is a string of searchable text with the keyword: Ulysses',
      options: ['option-1', 'option-2', 'option-3']
    },
    {
      category: '',
      dataUrl: 'https://example.com/slug-2',
      id: 2,
      name: 'Leslie Knope',
      party: 'democrat',
      slug: 'slug-2',
      text: 'this is another string of searchable text with the keyword: Barbara',
      options: ['option-4', 'option-5', 'option-6']
    },
    {
      dataUrl: 'https://example.com/slug-3',
      id: 3,
      name: 'Bobby Newport',
      party: 'republican',
      slug: 'slug-3',
      text: 'this is another string of searchable text with the keyword: Unknown'
    }
  ];
  filteredMeta = {
    searchFields: ['name', 'text']
  };
  filterInput = { };
  output: any;
  stamp: number;
  constructor(private filterPipe: FilterPipe) { }
  ngOnInit() {
    this.runPipe();
  }
  runPipe() {
    this.output = this.filterPipe.transform(
      this.data,
      this.stamp,
      this.filterInput,
      this.filteredMeta);
  }
  search(keyphrase) {
    this.filterInput['search'] = keyphrase;
    this.runPipe();
  }
  filterBy(key, value) {
    this.filterInput[key] = value;
    this.runPipe();
  }
}

describe('Pipe: Filter', () => {
  let component: ContainerComponent;
  let fixture: ComponentFixture<ContainerComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        FilterPipe,
        FilterUtilitiesService
      ],
      declarations: [ContainerComponent, FilterPipe]
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

  it('should return given a null value', () => {
    // Setup test
    component.data = undefined;
    fixture.detectChanges();
    delete component.filteredMeta['count'];
    fixture.detectChanges();
    expect(component.filteredMeta['count']).toBe(undefined);
    // Run test
    component.runPipe();
    fixture.detectChanges();
    expect(component.filteredMeta['count']).toBe(-1);
  });

  it('should filter by search term', () => {
    // Search for Ron
    component.search('Ron Swanson');
    expect(component.output.length).toBe(1);
    expect(component.output[0].party).toBe('libertarian');
    // Search for general text
    component.search('string of searchable text');
    expect(component.output.length).toBe(3);
  });

  it('should filter by key', () => {
    component.filterBy('party', 'republican');
    let output = component.output;
    expect(output.length).toBe(1);
    expect(output[0].name).toBe('Bobby Newport');
  });

  it('should not filter if key is set to "all"', () => {
    component.filterBy('party', 'all');
    let output = component.output;
    expect(output.length).toBe(3);
  });

  it('should not filter by search term if only given stop words', () => {
    expect(component.output.length).toBe(3);
    component.search('working together is something that should be done');
    expect(component.output.length).toBe(3);
  });

  it('should return a not found query string', () => {
    component.filterBy('name', 'all');
    component.filterBy('party', 'Green Party');
    component.filterBy('slug', 'slug-4');
    component.search('tom haverford');
    expect(component.output.length).toBe(0);
    let query = component.filteredMeta['query'];
    expect(query).toBe('"green party", "slug-4", and "tom haverford"');
  });

  it('should return given an undefined `fillterInputer` value', () => {
    // Setup test
    component.filterInput = undefined;
    fixture.detectChanges();
    delete component.filteredMeta['count'];
    fixture.detectChanges();
    expect(component.filteredMeta['count']).toBe(undefined);
    // Run test
    component.runPipe();
    fixture.detectChanges();
    expect(component.filteredMeta['count']).toBe(-1);
  });

  it('should skip undefined search fields during search', () => {
    component.filteredMeta.searchFields.push(undefined);
    component.search('Ron Swanson');
    expect(component.output.length).toBe(1);
  });

  it('should not filter by search without searchFields', () => {
    component.filteredMeta.searchFields = [];
    component.search('Andy Dwyer');
    expect(component.output.length).toBe(3);
  });

  it('should find an item in an array', () => {
    component.filterBy('options', 'option-2');
    expect(component.output.length).toBe(1);
    expect(component.output[0].name).toBe('Ron Swanson');
  });
});
