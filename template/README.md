# Workshop02

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Install Material
ng add @angular/material

# If manually install Material
1. npm install --save @angular/cdk @angular/material @angular/animations
2. Add BrowserPlatformAnimationModule to app.module.ts
3. Load icons in index.html <link rel="stylesheet" href="material icons">
4. Modify styles.css - body height: 100%

## Install hammerjs
npm install --save hammerjs

## Install rxjs
npm install --save rxjs@6.2.2

## Install flex-layout
npm install --save @angular/flex-layout@6.0.0-beta.17

## Install dexie
npm install --save dexie

## Add hammerjs to main.ts
import 'hammerjs'

## Select Material theme in styles.css
@angular/material/prebuilt-themes/deeppurple-amber.css

## if conflicting modules
ng g c components/XXX --spec false --flat --module app.module