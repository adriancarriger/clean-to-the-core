/**
 * @module AppModule
 */ /** */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/**
 * Parent routes for the {@link AppRoutingModule}
 */
const routes: Routes = [
  {
    path: '',
    data: {
      layout: {
        navWhiteText: true,
        paddingTop: false,
        zIndex: 0
      }
    },
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'about',
    loadChildren: './about/about.module#AboutModule'
  },
  {
    path: 'legal',
    loadChildren: './legal/legal.module#LegalModule'
  },
  {
    path: 'recipe/:slug',
    loadChildren: './recipe/recipe.module#RecipeModule'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
/**
 * @whatItDoes The {@link AppRoutingModule} is a
 * [Routing Module](https://angular.io/docs/ts/latest/guide/router.html#routing-module) that
 * handles the app's routing concerns.
 * @consumers {@link AppModule}
 * @see [Angular 2 docs - Lazy loading modules with the Router](https://angular.io/docs/ts/latest/guide/ngmodule.html#lazy-load)
 * 
 * The returned {@link AppRoutingModule} class is a Routing Module containing both the RouterModule
 * directives and the Dependency Injection providers that produce a configured Router.
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
