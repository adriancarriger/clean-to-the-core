/* tslint:disable:no-unused-variable */
import { DebugElement, Injectable } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Route, Router} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Subject, Observable } from 'rxjs/Rx';

import { HomeComponent } from './home.component';
import { HomeModule } from './home.module';
import { ApiService } from '../core/api/api.service';
import { MockApiService } from '../core/api/mock-api.service.spec';
import { GlobalEventsService } from '../core/global-events/global-events.service';
import { CoreModule } from '../core/core.module';
import { StatusBarService } from '../core/status-bar/status-bar.service';
import { SharedModule } from '../shared/shared.module';
import { MockDocumentService } from '../../mocks/mock-document.service.spec';
import { MockWindowService } from '../../mocks/mock-window.service.spec';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let mockApiService = new MockApiService();
  let mockDocumentService = new MockDocumentService();
  let mockWindowService: MockWindowService;
  let router: Router;
  const config: Route[] = [
    { path: '', component: HomeComponent },
    { path: 'test', component: HomeComponent, data: { layout: { paddingTop: true } }}
  ];
  beforeEach(async(() => {
    mockWindowService = new MockWindowService();
    TestBed.configureTestingModule({
      imports: [
        CoreModule,
        HomeModule,
        SharedModule,
        RouterTestingModule.withRoutes(config)
      ],
      providers: [
        { provide: 'Document', useValue: mockDocumentService },
        GlobalEventsService,
        StatusBarService,
        { provide: 'Window', useValue: mockWindowService },
        { provide: ApiService, useValue: mockApiService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get filterOptions from an Observable', () => {
    mockApiService.update();
    let searchFields = component.filteredMeta.searchFields;
    expect(searchFields.length === 0).toBe(true);
  });

  it('should use filter.prefilter to filter an array', () => {
    let filtered = [34, 65, 23, 78].filter(component.filteredMeta.prefilter);
    expect(filtered).toEqual([65, 23, 78]);
  });

  it('should scroll', done => {
    component.onFilterUpdate(123);
    setTimeout( () => {
      let newP = mockWindowService.pageYOffset;
      expect(newP).toBe(223);
      done();
    });
  });
});
