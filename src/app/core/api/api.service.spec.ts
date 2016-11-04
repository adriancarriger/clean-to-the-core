/* tslint:disable:no-unused-variable */
import { Injectable } from '@angular/core';
import { async, inject, TestBed } from '@angular/core/testing';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Subject, Observable } from 'rxjs/Rx';

import { ApiService } from './api.service';
import { MockAngularFire } from '../../../imported-mocks/mock-angular-fire.service.spec';

describe('Service: ApiService', () => {
  let mockAngularFire = new MockAngularFire();
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ApiService,
        { provide: AngularFire, useValue: mockAngularFire },
      ]
    });
  });

  beforeEach(async(() => {
    TestBed.compileComponents();
  }));

  it('should create the service', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));

  it('should return an observable', inject([ApiService], (service: ApiService) => {
    let recipe = service.recipe('2');
    expect(recipe instanceof Observable).toBe(true);
  }));

  it('should return an id', async(inject([ApiService], (service) => {
    service.slugToId('test-slug-2').then(id => {
      expect(id).toBe('48825');
    });
    mockAngularFire.update();
  })));
});
