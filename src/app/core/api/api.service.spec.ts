/* tslint:disable:no-unused-variable */
import { Injectable } from '@angular/core';
import { async, inject, TestBed } from '@angular/core/testing';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Subject, Observable } from 'rxjs/Rx';

import { ApiService } from './api.service';
import { MockAngularFire } from '../../../mocks/mock-angular-fire.service.spec';

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

  it('should return a recipe', async(inject([ApiService], (service: ApiService) => {
    service.slugToRecipe('test-slug-2').subscribe(recipe => {
      expect(recipe.id).toBe('48825');
    });
    mockAngularFire.update();
  })));

  it('should return the latest recipe', async(inject([ApiService], (service: ApiService) => {
    service.latest.subscribe(latest => {
      expect(latest.slug).toBe('test-slug-3');
    });
    mockAngularFire.update();
  })));
});
