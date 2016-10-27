/* tslint:disable:no-unused-variable */
import { Component } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { Route } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

@Component({
  template: ``
})
export class ContainerComponent { }

describe('App: CleanToTheCore', () => {
  const config: Route[] = [
    { path: '', component: ContainerComponent }
  ];
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(config),
        CoreModule.forRoot()
      ],
      declarations: [
        AppComponent,
        ContainerComponent
      ],
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
