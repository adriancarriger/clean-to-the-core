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
    path: 'recipe/:slug',
    data: {
      fixed: true
    },
    loadChildren: './recipe/recipe.module#RecipeModule'
  },
  {
    path: 'about',
    data: {
      fixed: true
    },
    loadChildren: './about/about.module#AboutModule'
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
