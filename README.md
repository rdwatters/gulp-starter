# gulp-starter

This is a basic gulp starter with browser-sync, gulp-sass (with bourbon and neat mixins), live-reload (with css injection), local server (localhost:3000), js concat/uglify, Babel (ES 2015 transpilation), and some very basic starter partials/reset for sass.

## Requirements

You'll need the following to get this to work:

* Node
* NPM
* Gulp

## Getting Started

1. `cd directory/of/your/choice`
2. `git clone https://github.com/rdwatters/gulp-starter.git && cd gulp-starter`
3. `npm install`
4. `gulp`
5. Your browser should open to `localhost:3000` auto-magically. Open a new tab and navigate to `localhost:3001` to see Browser-sync awesomeness.

## Notes

* **JavaScript** 
    - Put your JavaScript files in `js/scripts/`.
    - Feel free to remove jQuery from `js/scripts/` if you do not need it, especially since this will slow down and de-optimize transpilation of ES6 and Babel in the build process. 
* **SASS**
    - The latest version of Bourbon and Neat are included with the clone and do not require additional install
    - [Bourbon documentation](http://bourbon.io/docs/)
    - [Neat documentation](http://thoughtbot.github.io/neat-docs/latest/#fill-parent) 




