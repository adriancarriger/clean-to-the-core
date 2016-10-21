/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { Route, Router} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { FooterComponent } from '../footer/footer.component';
import { HomeComponent } from '../../home/home.component';
import { HomeModule } from '../../home/home.module';
import { LayoutComponent } from './layout.component';
import { NavComponent } from '../nav/nav.component';

describe('LayoutComponent', () => {
  let router: Router;
  let location: Location;
  let config: Route[] = [
    { path: '', component: HomeComponent },
    { path: 'test', component: HomeComponent, data: { fixed: true }}
  ];
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(config),
        HomeModule
      ],
      providers: [Location],
      declarations: [ FooterComponent, LayoutComponent, NavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(inject([Router, Location], (_router: Router, _location: Location) => {
    location = _location;
    router = _router;
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update padding on Height changes', () => {
    component.onHeightChange('top', 10, 40);
    expect(component.padding.top).toEqual('50px');
  });

  it('should set fixed to true on route change', () => {
    router.navigate(['/test']).then(() => {
      expect(location.path()).toBe('/test');
      expect(component.fixed).toBe(true);
    });
  });

});
