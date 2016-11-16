/* tslint:disable:no-unused-variable */
import { DebugElement, Injectable } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Subject, Observable } from 'rxjs/Rx';

import { HomeComponent } from './home.component';
import { HomeModule } from './home.module';
import { ApiService } from '../core/api/api.service';
import { MockApiService } from '../core/api/mock-api.service.spec';
import { GlobalEventsService } from '../core/global-events/global-events.service';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { MockDocumentService } from '../../mocks/mock-document.service.spec';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let mockApiService = new MockApiService();
  let mockDocumentService = new MockDocumentService();
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ CoreModule, HomeModule, SharedModule ],
      providers: [
        { provide: 'Document', useValue: mockDocumentService },
        GlobalEventsService,
        { provide: 'Window', useValue: window },
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
});
