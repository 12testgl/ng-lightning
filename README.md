# ng-lightning

[![Build Status](https://travis-ci.org/ng-lightning/ng-lightning.svg?branch=master)](https://travis-ci.org/ng-lightning/ng-lightning)
[![Sauce Test Status](https://saucelabs.com/buildstatus/ng-lightning)](https://saucelabs.com/u/ng-lightning)
[![npm version](https://badge.fury.io/js/ng-lightning.svg)](https://www.npmjs.com/package/ng-lightning)
[![npm](https://img.shields.io/npm/dm/ng-lightning.svg?maxAge=2592000)](https://www.npmjs.com/package/ng-lightning)

This library contains native [Angular](https://angular.io/) components and directives written from scratch in TypeScript using the [Lightning Design System](https://www.lightningdesignsystem.com/) CSS framework.

We are looking for community help to find and fix bugs, improve demo site and create new components.

## Installation

Install through `npm`:

```bash
npm install --save ng-lightning
```

#### Dependencies
This library depends on Salesforce's LDS markup and CSS (tested with 2.8). We don't ship any CSS file, but you have to take care of including LDS CSS rules in your page. There are various ways to achieve this, for example compiling through their source files ([`@salesforce-ux/design-system`](https://github.com/salesforce-ux/design-system)) or by adding this into your `<head>`:

```html
<link rel="stylesheet" href="https://unpkg.com/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css">
```

#### SVG Icons
Because of various cross-domain issues, if you want to use SLDS icons, you must provide a copy of the various sprite files (ie `@salesforce-ux/design-system/assets/icons/action-sprite/svg/symbols.svg`), served locally through your server.

#### IE11 support
Unfortunately, IE11 does not support two important features.

* [SVG External Content](https://css-tricks.com/svg-use-with-external-reference-take-2/), used to load SVG icons from a spritemap. In order to support this, you will need to use a small script called [svg4everybody](https://github.com/jonathantneal/svg4everybody).  
Available on npm cdn [here](https://unpkg.com/svg4everybody).

* `Element.classList` on SVG elements, used by Angular's `renderer.setElementClass`. See [here](https://github.com/angular/angular/issues/6327) for more information. Use [classList.js](https://github.com/eligrey/classList.js) shim, available on npm cdn [here](https://unpkg.com/classlist.js).

Typically, these shims should be placed within the `<head>` element.  


## Usage & Demo
http://ng-lightning.github.io/ng-lightning/


## Contributing

We are always looking for high quality contributions! Please check the [CONTRIBUTING.md](CONTRIBUTING.md) doc for guidelines.

## Need help?

For questions on how to use ng-lightning or how to contribute, please post questions to [<img alt="Stack Overflow" src="https://cdn.sstatic.net/Sites/stackoverflow/company/img/logos/so/so-logo.svg?v=2bb144720a66" width="140" />](https://stackoverflow.com/questions/tagged/ng-lightning) using the `ng-lightning` tag. If you find a bug in the source code or a mistake in the documentation, you can help us by submitting an issue to our GitHub Repository.

## Companies using ng-lightning

- [Viabill](https://viabill.dk/)
- [ZuluTrade](http://zulutrade.com/)

## Browsers

We support the same browsers and versions supported by both Angular and Salesforce's Lightning Design System.  
Cross browser/environment testing is performed through [Saucelabs](https://saucelabs.com/).  
