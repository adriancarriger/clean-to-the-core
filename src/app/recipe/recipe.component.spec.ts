/* tslint:disable:no-unused-variable */
import { DebugElement, Injectable } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Subject, Observable } from 'rxjs/Rx';

import { RecipeComponent } from './recipe.component';
import { ApiService } from '../core/api/api.service';

@Injectable()
class MockActivatedRoute {
  snapshot = {
    params: {
      slug: 'test-slug-1'
    }
  };
}

@Injectable()
export class MockApiService {
  recipeObj;
  events$;
  data = {
    id: 0,
    blurb: 'blurb text'
  };
  constructor() {
    this.events$ = new Subject();
    this.recipeObj = this.events$.asObservable();
  }
  recipe(input) {
    this.update();
    return this.events$.asObservable();
  }
  update() {
    this.events$.next(this.data);
  }
}

describe('RecipeComponent', () => {
  let component: RecipeComponent;
  let fixture: ComponentFixture<RecipeComponent>;
  let mockActivatedRoute = new MockActivatedRoute();
  let mockApiService = new MockApiService();
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeComponent ],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: ApiService, useValue: mockApiService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
