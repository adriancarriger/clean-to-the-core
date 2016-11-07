// /* tslint:disable:no-unused-variable */
// import { DebugElement, Injectable } from '@angular/core';
// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { By } from '@angular/platform-browser';
// import { ActivatedRoute } from '@angular/router';
// import { Subject, Observable } from 'rxjs/Rx';
// import { Location } from '@angular/common';

// import { Disqus } from './ng2-disqus.component';
// import { WindowProviders } from './window';

// import { MockDocumentService } from '../../../mocks/mock-document.service.spec';

// @Injectable()
// export class MockLocation {
//   path() {
//     return 'https://example.com/';
//   }
// }

// describe('DisqusComponent', () => {
//   let component: Disqus;
//   let fixture: ComponentFixture<Disqus>;
//   let mockLocation = new MockLocation();
//   let mockDocumentService = new MockDocumentService();
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ Disqus ],
//       providers: [
//         { provide: Document, useValue: mockDocumentService },
//         { provide: Location, useValue: mockLocation },
//         WindowProviders
//       ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(Disqus);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
