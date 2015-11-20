var gulp = require('gulp');
 
// Include Plugins
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');

 
// Compile Sass; note sass options to prevent server from breaking when you fudge a css rule
gulp.task('sass', function () {
    return gulp.src('scss/*.scss')
        .pipe(plumber())
        .pipe(sass({outputStyle: 'compressed',errToConsole: true}))
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('css'));
});
 
// Concatenate & Minify JS
gulp.task('scripts', function () {
    return gulp.src('js/scripts/*js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('js'))
        .pipe(rename('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('js'));   
});
//browser-sync setup--will become your default task
gulp.task('serve', ['sass','scripts'], function() {

    browserSync.init({
        server: {
            baseDir: "./"
        },
        open: true
    });

    gulp.watch("scss/*.scss", ['sass']);
    gulp.watch("js/scripts/*.js", ['scripts']);
    gulp.watch("js/main.js").on('change', browserSync.reload);
    gulp.watch("*.html").on('change', browserSync.reload);
    // watch css and stream to BrowserSync when it changes
    gulp.watch('css/styles.min.css', function() {
      // grab css files and send them into browserSync.stream
      // this injects the css into the page rather than causing a full page refresh
      gulp.src('css/styles.min.css')
        .pipe(browserSync.stream());
    });
});
 
// Default Task
gulp.task('default', ['serve']);








