/* tslint:disable:no-unused-variable */
import { Component, DebugElement, Injectable, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Subject, Observable } from 'rxjs/Rx';

import { RecipeComponent } from './recipe.component';
import { ApiService } from '../core/api/api.service';
import { MockApiService } from '../core/api/mock-api.service.spec';
import { ImageCoverComponent } from '../shared/image-cover/image-cover.component';
import { LabelsComponent } from '../shared/labels/labels.component';

@Component({
  /* tslint:disable */selector: 'disqus',/* tslint:enable */
  template: '<div id="disqus_thread"></div>'
})
export class MockDisqus {
  @Input() identifier: string;
  @Input() shortname: string;
}

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
      declarations: [ MockDisqus, ImageCoverComponent, LabelsComponent, RecipeComponent ],
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
