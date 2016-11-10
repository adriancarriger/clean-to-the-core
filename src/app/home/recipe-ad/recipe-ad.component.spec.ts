/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeAdComponent } from './recipe-ad.component';
import { ImageCoverComponent } from '../../shared/image-cover/image-cover.component';

describe('RecipeAdComponent', () => {
  let component: RecipeAdComponent;
  let fixture: ComponentFixture<RecipeAdComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageCoverComponent, RecipeAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeAdComponent);
    component = fixture.componentInstance;
    component.recipe = {id: 0, title: 'test title'};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
