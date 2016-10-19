/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Route } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { FooterComponent } from '../footer/footer.component';
import { HomeComponent } from '../../home/home.component';
import { HomeModule } from '../../home/home.module';
import { LayoutComponent } from './layout.component';
import { NavComponent } from '../nav/nav.component';

describe('LayoutComponent', () => {

  let config: Route[] = [
    { path: '', component: HomeComponent }
  ];
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(config),
        HomeModule
      ],
      declarations: [ FooterComponent, LayoutComponent, NavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update padding on Height changes', () => {
    component.onHeightChange('top', 10, 40);
    expect(component.padding.top).toEqual('50px');
  });
});
