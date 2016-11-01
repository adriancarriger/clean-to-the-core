/**
 * Spec on hold 
 */
// /* tslint:disable:no-unused-variable */
// import { DebugElement, Injectable } from '@angular/core';
// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { By } from '@angular/platform-browser';

// import { Subject } from 'rxjs/Rx';

// import { RecipeAdComponent } from './recipe-ad.component';
// import { ImageCoverComponent } from '../../shared/image-cover/image-cover.component';
// import { ApiService } from '../../core/api/api.service';


// @Injectable()
// export class ApiServiceMock {
//   events$;
//   data = {
//     id: 0,
//     blurb: 'blurb text'
//   };
//   constructor() {
//     this.events$ = new Subject();
//   }
//   recipe(input) {
//     this.update();
//     return this.events$.asObservable();
//   }
//   update() {
//     this.events$.next(this.data);
//   }
// }

// describe('RecipeAdComponent', () => {
//   let component: RecipeAdComponent;
//   let fixture: ComponentFixture<RecipeAdComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ ImageCoverComponent, RecipeAdComponent ],
//       providers: [
//         { provide: ApiService, useValue: ApiServiceMock }
//       ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(RecipeAdComponent);
//     component = fixture.componentInstance;
//     component.recipeMeta = {id: 0, title: 'test title'};
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
