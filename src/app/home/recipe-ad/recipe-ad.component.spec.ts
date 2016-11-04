/* tslint:disable:no-unused-variable */
import { DebugElement, Injectable } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Subject } from 'rxjs/Rx';

import { RecipeAdComponent } from './recipe-ad.component';
import { ImageCoverComponent } from '../../shared/image-cover/image-cover.component';
import { ApiService } from '../../core/api/api.service';
import { MockApiService } from '../../core/api/mock-api.service.spec';

describe('RecipeAdComponent', () => {
  let component: RecipeAdComponent;
  let fixture: ComponentFixture<RecipeAdComponent>;
  let mockApiService = new MockApiService();
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageCoverComponent, RecipeAdComponent ],
      providers: [
        { provide: ApiService, useValue: mockApiService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeAdComponent);
    component = fixture.componentInstance;
    component.recipeMeta = {id: 0, title: 'test title'};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get a recipe from the recipe subscription', () => {
    mockApiService.update();
    expect (component.recipe.blurb).toBe('blurb text');
  });
});
