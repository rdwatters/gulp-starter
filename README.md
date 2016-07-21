# gulp-starter

This starter includes browser-sync, gulp-sass (with bourbon and neat mixins), live-reload (with css injection), local server (localhost:3000), js concat/uglify, Babel (ES 2015 transpilation), image resizing (for `_thumbnail` directory), and some very basic starter partials/reset for sass.

## Requirements

You'll need the following to get this to work:

* Node
* NPM
* Gulp

## Getting Started

1. `cd directory/of/your/choice`
2. `git clone https://github.com/rdwatters/gulp-starter.git && cd gulp-starter && npm install && gulp`
3. Your default browser should open to `localhost:3000`. Open a new tab and navigate to `localhost:3001` to see Browser-sync awesomeness. Check your terminal for the external link if you want to see it on multiple devices on the same network.

## Notes

* **JavaScript**
    - Put JavaScript files in `js/scripts/`.
    - jQuery CDN is currently included above `</body>`
* **SASS**
    - The latest version of Bourbon and Neat are included with the clone and do not require additional install
    - [Bourbon documentation](http://bourbon.io/docs/)
    - [Neat documentation](http://thoughtbot.github.io/neat-docs/latest/#fill-parent)
    - [Sassdocs Documentation Generator](http://sassdoc.com/)




