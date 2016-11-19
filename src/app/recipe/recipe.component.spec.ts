/* tslint:disable:no-unused-variable */
import { Component, DebugElement, Injectable, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Subject, Observable } from 'rxjs/Rx';

import { RecipeComponent } from './recipe.component';
import { TimerButtonComponent }  from './timer-button/timer-button.component';
import { ApiService } from '../core/api/api.service';
import { MockApiService } from '../core/api/mock-api.service.spec';
import { SharedModule } from '../shared/shared.module';

@Injectable()
class MockActivatedRoute {
  snapshot = {
    params: {
      slug: 'test-slug-1'
    }
  };
}

describe('RecipeComponent', () => {
  let component: RecipeComponent;
  let fixture: ComponentFixture<RecipeComponent>;
  let mockActivatedRoute = new MockActivatedRoute();
  let mockApiService = new MockApiService();
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ SharedModule ],
      declarations: [
        RecipeComponent,
        TimerButtonComponent
      ],
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
