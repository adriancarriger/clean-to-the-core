# Clean to the Core

[![Build Status](http://img.shields.io/travis/adriancarriger/clean-to-the-core/master.svg?maxAge=60)](https://travis-ci.org/adriancarriger/clean-to-the-core)
[![Codecov](https://img.shields.io/codecov/c/github/adriancarriger/clean-to-the-core/master.svg?maxAge=60)](https://codecov.io/gh/adriancarriger/clean-to-the-core)
[![Dependency Status](https://img.shields.io/david/adriancarriger/clean-to-the-core/master.svg?maxAge=60)](https://david-dm.org/adriancarriger/clean-to-the-core)
[![devDependency Status](https://img.shields.io/david/dev/adriancarriger/clean-to-the-core/master.svg?maxAge=60)](https://david-dm.org/adriancarriger/clean-to-the-core?type=dev)
[![Angular 2 Style Guide](https://mgechev.github.io/angular2-style-guide/images/badge.svg)](https://angular.io/styleguide)

🍳 A gluten free, accessible, offline-first, progressive web app for creating healthy meals.

## Features

* `offline`: Works offline even after a full page refresh using a [service worker](https://developers.google.com/web/fundamentals/getting-started/primers/service-workers). Subsequent page load times are very fast on browsers that [support service workers](http://caniuse.com/#feat=serviceworkers).
* `accessible`: Designed to be accessible and passes the [chrome accessibility extension](https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb?hl=en) audit
* `notifications`: Uses push notifications to inform a user when a recipe timer is complete
* `lazy routes`: Routes are lazy loaded for a faster initial load time

## Demo

Checkout the [demo](https://beta.cleantothecore.com/)

<a href="https://beta.cleantothecore.com/">
  <img alt="recipe page top" src="https://raw.githubusercontent.com/adriancarriger/clean-to-the-core/master/images/example-1.png" width="200px">
  <img alt="recipe page steps" src="https://raw.githubusercontent.com/adriancarriger/clean-to-the-core/master/images/example-2.png" width="200px">
  <img alt="home page" src="https://raw.githubusercontent.com/adriancarriger/clean-to-the-core/master/images/example-3.png" width="200px">
</a>

[![Example Gif](https://raw.githubusercontent.com/adriancarriger/clean-to-the-core/master/images/example.gif)](https://beta.cleantothecore.com/)

## Docs

Checkout the [documentation](https://adriancarriger.github.io/clean-to-the-core/globals.html)

## Tech Stack

* Front end: [Angular 2](https://github.com/angular/angular) version 2.3.0
* Database/hosting: [Firebase](https://firebase.google.com/)
* Firebase data is cached offline with IndexedDB via [localForage](https://github.com/localForage/localForage) using [this service](https://github.com/adriancarriger/clean-to-the-core/blob/master/src/app/core/api/firebase-cache.service.ts)
* Back end prep: [Node.js](https://nodejs.org/en/) is used to transfer blog data from a [Wordpress site](http://cleantothecore.com) with code located in a [separate repository](https://github.com/adriancarriger/clean-to-the-core-backend)
* Scaffolding: [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.21

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `npm run e2eTests` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 
Before running the tests make sure you are serving the app via `ng serve`.

## angular-cli help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## License

This project is licensed under the MIT Open Source license. For more information, see the [LICENSE](LICENSE) file in this repository.