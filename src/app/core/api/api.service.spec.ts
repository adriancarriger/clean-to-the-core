/* tslint:disable:no-unused-variable */
import { Injectable } from '@angular/core';
import { async, inject, TestBed } from '@angular/core/testing';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Subject, Observable } from 'rxjs/Rx';

import { ApiService } from './api.service';

@Injectable()
export class MockAngularFire {
  recipeList$;
  database = {
    list: (input: string) => {
      return this.recipeList$.asObservable();
    },
    object: (input: string) => {
      return this.recipeList$.asObservable();
    }
  };
  private mockArray = [
    {
      title: 'test title 1'
    },
    {
      title: 'test title 2'
    }
  ];
  constructor() {
    this.recipeList$ = new Subject();
    this.update();
  }
  update() {
    this.recipeList$.next(this.mockArray);
  }
}

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

  it('should ...', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));

  it('should return an observable', inject([ApiService], (service: ApiService) => {
    let recipe = service.recipe('2');
    expect(recipe instanceof Observable).toBe(true);
  }));
});
