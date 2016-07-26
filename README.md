# gulp-starter

This kit includes [Browsersync][], [gulp-sass][] (with [bourbon][] and [neat][] mixins), live-reload (with css injection), local server, image resizing, sassdoc, and [sourcemaps][]. Source organization scaffolding for SASS is also included and modeled after [Sass guidelines][].

## Requirements

You'll need the following to get this to work:

* Node
* NPM
* Gulp
* ImageMagick and GraphicsMagick (dependencies for [gulp-image-resize](https://www.npmjs.com/package/gulp-image-resize))

> imagemagick, graphicsmagick, and node (w/NPM) can be installed with [homebrew](http://brew.sh/) using `brew install imagemagick`, `brew install graphicsmagick`, and `brew install node`.

## Getting Started

1. `cd directory/of/your/choice`
2. `git clone https://github.com/rdwatters/gulp-starter.git && cd gulp-starter && npm install && gulp`
3. Your default browser should open to `localhost:3000`. Open `localhost:3001` in a new tab for Browser-sync awesomeness. Your terminal will also provide an external link you can use for other devices on the *same network.*

## Notes

* **JavaScript**
    - Put JavaScript files in `js/scripts/`.
    - Gulp will build both a main.js (unminified and unuglified) and main.min.js (minified, uglified) in the `js` directory.
    - jQuery CDN is currently included above `</body>`
* **SASS**
    - The latest version of Bourbon and Neat are included with the clone and do not require additional installation.
    - [Bourbon documentation][] (Mixin library)
    - [Neat documentation][] (Mixin library for layout built on top of Bourbon)
    - [Sassdoc][] sass documentation generator
* **FONTS**
  * There are 16 open-source Google fonts in `css/fonts` that have be renamed according to a naming convention for easier use of `@font-face` in `scss/base/_fonts.scss`. You can change these fonts easily in `scss/_variablesscss` by changing the multiple `$font:''` variables.
  * Acceptable values include the following: `abrilfatface`, `crimsontext`, `fontawesome`, `lato`, `merriweather`, `montserrat`, `notoserif`, `opensans`, `playfairdisplay`, `ptsans`, `raleway`, `roboto`, `robotomono`, `robotoslab`, `sourcesanspro`, `ubuntu`
* **SASSDOCS**
  * Documentation is automatically generated for all sass mixins and functions in `sass-docs`. For information on annotation conventions, check out the [sassdocs website](http://sassdoc.com/annotations/).
* **IMAGES**
  * Images added to `source-images` will be automatically resized to widths of 1200px, 600px, 300px and moved to `images/`, `images/half`, and `images/thumbs` respectively.

> **NOTE:** Errors in sass or js syntax do ***not*** break the server, livereload, etc. Be sure to check your console for errors.


[bourbon]:http://bourbon.io
[Bourbon documentation]:http://bourbon.io/docs/
[Browsersync]:https://www.browsersync.io/
[gulp-sass]:https://www.npmjs.com/package/gulp-sass
[neat]:http://neat.bourbon.io/
[Neat Documentation]:http://thoughtbot.github.io/neat-docs/latest
[Sassdoc]:http://sassdoc.com/
[Sass guidelines]:http://sass-guidelin.es
[sourcemaps]: https://www.npmjs.com/package/gulp-sourcemaps




