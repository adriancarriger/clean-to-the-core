/**
 * @module AppModule
 * @preferred
 */ /** */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
/**
 * @whatItDoes The root module class that is bootstraped by the `main.ts` file.
 * @see [Angular 2 docs - the application root module](https://angular.io/docs/ts/latest/guide/ngmodule.html#root-module)
 */
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CoreModule.forRoot(),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
