const gulp = require('gulp');

// Include Plugins
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const gplumber = require('gulp-plumber');
const gutil = require('gulp-util');
const imageResize = require('gulp-image-resize');
const minifycss = require('gulp-minify-css');
const os = require('os');
const parallel = require("concurrent-transform");
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const sassdoc = require('sassdoc');
const sassFiles = 'scss/**/*.scss';
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
// our custom error handler
const errorHandler = function() {
    // default appearance
    return gplumber(function(error) {
        // add indentation
        var msg = error.codeFrame.replace(/\n/g, '\n    ');
        // output styling
        gutil.log('|- ' + gutil.colors.bgRed.bold('Build Error in ' + error.plugin));
        gutil.log('|- ' + gutil.colors.bgRed.bold(error.message));
        gutil.log('|- ' + gutil.colors.bgRed('>>>'));
        gutil.log('|\n    ' + msg + '\n           |');
        gutil.log('|- ' + gutil.colors.bgRed('<<<'));
    });
};

gulp.task('sassdoc', function() {
    var options = {
        dest: 'sass-docs',
        verbose: true,
        basePath: 'https://github.com/rdwatters/gulp-starter/tree/master/scss'
    };

    return gulp.src('scss/**/*.scss')
        .pipe(sassdoc(options));
});

// .pipe(errorHandler())
gulp.task('sass', () => {
    return gulp.src(sassFiles)
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'expanded', errToConsole: true }))
        .pipe(autoprefixer())
        .pipe(minifycss())
        .pipe(rename('style.min.css'))
        .pipe(sourcemaps.write('css/'))
        .pipe(gulp.dest('css/'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('js/scripts/*js')
        .pipe(errorHandler())
        .pipe(sourcemaps.init())
        .pipe(concat('main.min.js'))
        .pipe(gulp.dest('js'))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('js'));
});

gulp.task("image-resize", function() {
    return gulp.src("img-source/*.{jpg,png}")
        .pipe(parallel(
            imageResize({ width: 1400 }),
            os.cpus().length
        ))
        .pipe(gulp.dest("images"))
        .pipe(parallel(
            imageResize({ width: 600 }),
            os.cpus().length
        ))
        .pipe(gulp.dest("images/half"))
        .pipe(parallel(
            imageResize({ width: 300 }),
            os.cpus().length
        ))
        .pipe(gulp.dest("images/thumbs"));
});

//browser-sync setup--will become your default task
gulp.task('serve', ['sass', 'scripts', 'image-resize', 'sassdoc'], function() {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        open: true
    });
    gulp.watch(['scss/*.scss', 'scss/**/*scss'], ['sass','sassdoc']);
    gulp.watch("js/scripts/*.js", ['scripts']);
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("js/main.min.js").on('change', browserSync.reload);
    gulp.watch("img-source/*.{jpg,png,jpeg}", ['image-resize']);
    // watch css and stream to BrowserSync when it changes
    gulp.watch('css/style.min.css', function() {
        gulp.src('css/style.min.css')
            .pipe(browserSync.stream());
    });
});

// Default Task
gulp.task('default', ['serve']);
