/**
 * @module AppModule
 */ /** */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      fixed: false
    },
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'about',
    data: {
      fixed: true
    },
    loadChildren: './about/about.module#AboutModule'
  },
  {
    path: 'recipe/:slug',
    data: {
      fixed: true
    },
    loadChildren: './recipe/recipe.module#RecipeModule'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
