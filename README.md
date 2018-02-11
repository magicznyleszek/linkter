![coverage-shield-badge-1](https://img.shields.io/badge/coverage-58.82%25-red.svg)

# Linkter

Features:

* ES6 (with Babel)
* Angular 1.6
* Karma tests
* MADCSS
* Responsive design
* Linters

Note: I assumed that this would be a `PHP`-based website with Backend providing the data via `window.linkterData`. For now Jekyll mocks it.

Requirements:

1. [Jekyll](http://jekyllrb.com/)
2. [Node](https://nodejs.org)

## Building

To preview the project, you need to do three things:

1. `npm install`
2. `npm run serve`
3. open [127.0.0.1:2038](http://127.0.0.1:2038/) in the browser

## Development

What you want is to basically have two terminals:

1. `npm run serve` -- this is providing the [127.0.0.1:2038](http://127.0.0.1:2038/) "server" and watching changes on Jekyll
2. `npm run watch` -- this is watching all source files and producing dist ones

## TODO

* write test for modules
* store filters and sorter value in localStorage
* keep filters and sorter values as routing parameters
* search filter should use fuzzy search algorithm
