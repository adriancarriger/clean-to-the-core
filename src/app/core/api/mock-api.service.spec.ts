import { Injectable } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { Subject } from 'rxjs/Rx';

import { FilterOptionsObservable, RecipeObservable } from './api.service';

@Injectable()
export class MockApiService {
  options$;
  recipe$;
  recipes$;
  recipes: FirebaseListObservable<any[]>;
  filterOptions: FilterOptionsObservable;
  private filterOptionsData = {
    search: { searchFields: [] }
  };
  private recipesData = [];
  private recipeData = {
    id: 0,
    blurb: 'blurb text'
  };
  private id = 0;
  constructor() {
    this.recipe$ = new Subject();
    this.options$ = new Subject();
    this.recipes$ = new Subject();
    this.filterOptions = this.options$.asObservable();
    this.recipes = this.recipes$.asObservable();
    this.update();
  }
  recipe(key: number): RecipeObservable {
    this.update();
    return this.recipe$.asObservable();
  }
  slugToRecipe(slug: string): Promise<RecipeObservable> {
    return new Promise((resolve, reject) => {
      resolve( this.recipe(2) );
    });
  }
  update() {
    this.addRecipe();
    this.options$.next(this.filterOptionsData);
    this.recipe$.next(this.recipeData);
    this.recipes$.next(this.recipesData);
  }
  private addRecipe() {
    this.id++;
    let newRecipe = this.recipeData;
    newRecipe.id = this.id;
    this.recipesData.push( newRecipe );
  }
}
