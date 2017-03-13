/**
 * @module AppModule
 * @preferred
 */ /** */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireOfflineModule } from 'angularfire2-offline';

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
    AngularFireOfflineModule,
    AppRoutingModule,
    BrowserModule,
    CoreModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
