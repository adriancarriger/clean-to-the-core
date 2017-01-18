/* tslint:disable:no-unused-variable */
import { Injectable } from '@angular/core';
import { async, inject, TestBed } from '@angular/core/testing';
import { Subject, Observable } from 'rxjs/Rx';

import { ApiService } from './api.service';
import { Angularfire2OfflineService } from 'angularfire2-offline';
import { MockFirebaseCacheService } from './mock-firebase-cache.service.spec';

describe('Service: ApiService', () => {
  let mockFirebaseCacheService: MockFirebaseCacheService;
  beforeEach(() => {
    mockFirebaseCacheService = new MockFirebaseCacheService();
    TestBed.configureTestingModule({
      providers: [
        ApiService,
        { provide: Angularfire2OfflineService, useValue: mockFirebaseCacheService },
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
    service.slugToRecipe('slug-2').subscribe(recipe => {
      expect(recipe['id']).toEqual(2);
    });
    mockFirebaseCacheService.update();
  })));

  it('should return the latest recipe', async(inject([ApiService], (service: ApiService) => {
    service.latest.subscribe(latest => {
      expect(latest['slug']).toEqual('slug-3');
    });
    mockFirebaseCacheService.update();
  })));
});
