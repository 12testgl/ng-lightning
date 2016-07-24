# ng-lightning

[![Build Status](https://travis-ci.org/ng-lightning/ng-lightning.svg?branch=master)](https://travis-ci.org/ng-lightning/ng-lightning)
[![Sauce Test Status](https://saucelabs.com/buildstatus/ng-lightning)](https://saucelabs.com/u/ng-lightning)
[![npm version](https://badge.fury.io/js/ng-lightning.svg)](https://www.npmjs.com/package/ng-lightning)
[![Join the chat at https://gitter.im/ng-lightning/ng-lightning](https://badges.gitter.im/ng-lightning/ng-lightning.svg)](https://gitter.im/ng-lightning/ng-lightning?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

This library contains native [Angular 2](https://angular.io/) components and directives written from scratch in TypeScript using the [Lightning Design System](https://www.lightningdesignsystem.com/) CSS framework.

**This release is a developer preview.** We are looking for community help to find and fix bugs, improve demo site and create new components.

## Installation

Install through `npm`:

```bash
npm install --save ng-lightning
```

If you use **SystemJS** to load your files, you may want to use our bundle file through [npmcdn](https://npmcdn.com/)

```html
<script src="https://npmcdn.com/ng-lightning@x.x.x/ng-lightning.bundle.js"></script>
```

####Note - IE11 Support
IE11 does not currently support two important features used by ng-lightning. 

* SVG External Content -- used to load SVG Icons from a sprite map via the `use` tag. See [here](https://css-tricks.com/svg-use-external-source/) for more information.
* `Element.classList` on SVG elements -- used by Angular's `renderer.setElementClass`. See [here](https://github.com/angular/angular/issues/6327) for more information.

If you need IE11 support, you'll need to provide the following polyfills. Typically, these should be placed within the `head` element, similar to other shims like core-js or reflect-metadata`

* [SVG4Everybody](https://github.com/jonathantneal/svg4everybody)
* [classList.js](https://github.com/eligrey/classList.js)

These polyfills are also available via npmcdn.

* [https://npmcdn.com/svg4everybody](https://npmcdn.com/svg4everybody)
* [https://npmcdn.com/classlist.js](https://npmcdn.com/classlist.js)

** To prevent considerable rendering load in IE11, utilize `core-js` for Angular 2 polyfills over `es6-shim`. See the [Angular 2 documentation](https://angular.io/docs/ts/latest/guide/npm-packages.html) for more information using `core-js` polyfills with Angular 2. ** 

## Usage & Demo
http://ng-lightning.github.io/ng-lightning/


## Contributing

We are always looking for high quality contributions! Please check the [CONTRIBUTING.md](CONTRIBUTING.md) doc for guidelines.


## Sponsors

Development is supported by [ZuluTrade](http://zulutrade.com/).


## Browsers

We support the same browsers and versions supported by both Angular 2 and Salesforce's Lightning Design System.

Cross browser/environment testing is performed through [Saucelabs](https://saucelabs.com/).  
[![Sauce Test Status](https://saucelabs.com/browser-matrix/ng-lightning.svg)](https://saucelabs.com/u/ng-lightning)
