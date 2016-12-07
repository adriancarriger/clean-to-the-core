import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';

if (environment.production) {
  enableProdMode();
}

/** 
 * Must use promise variable because of https://github.com/angular/angular-cli/issues/2887
 */
let promise = platformBrowserDynamic().bootstrapModule(AppModule);
/* tslint:disable */ promise.catch(err => console.error(err)); /* tslint:enable */
