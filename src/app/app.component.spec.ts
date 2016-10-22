/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { Route } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';

describe('App: CleanToTheCore', () => {
  const config: Route[] = [
    { path: '', component: HomeComponent }
  ];
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(config),
        CoreModule.forRoot()
      ],
      declarations: [
        AppComponent,
        HomeComponent
      ],
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
