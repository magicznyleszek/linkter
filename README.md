![coverage-shield-badge-1](https://img.shields.io/badge/coverage-58.82%25-red.svg)

# Linkter

Features:

* ES6 (with Babel)
* Angular 1.6
* Karma tests
* MADCSS
* Responsive design
* Linters
* Live reload (via Browsersync)
* Editorconfig

Note: I assumed that this would be a `PHP`-based website with Backend providing the data via `window.linkterData`. For now Jekyll mocks it.

Requirements:

1. [Jekyll](http://jekyllrb.com/)
2. [Node](https://nodejs.org)

## Building

To preview the project, you need to do three things:

1. `npm install`
2. `npm run serve`
3. open [localhost:2038](http://localhost:2038/) in the browser

## Development

What you want is to basically have three terminals:

1. `npm run serve` -- building and serving Jekyll site
2. `npm run watch` -- this is watching all source files and producing dist ones
3. `npm run livereload` -- live reloading website on changes
4. open [localhost:2039](http://localhost:2039/)

## TODO

* write test for modules
* store filters and sorter value in localStorage
* keep filters and sorter values as routing parameters
* search filter should use fuzzy search algorithm
