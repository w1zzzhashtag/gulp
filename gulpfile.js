var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var useref      = require('gulp-useref');
var uglify      = require('gulp-uglify');
var gulpIf      = require('gulp-if');
var cssnano     = require('gulp-cssnano');
var imagemin    = require('gulp-imagemin');
var cache       = require('gulp-cache');
var del         = require('del');
var concat      = require('gulp-concat');


gulp.task('serve', function() {
    browserSync.init({
        server: "./app"
    });
    gulp.watch("app/block/**/*.scss", gulp.series('sassCompile'));
    gulp.watch("app/scss/**/*.scss", gulp.series('sass'));
    gulp.watch("app/**/*.html").on('change', browserSync.reload);
    gulp.watch("app/pages/**/*.html").on('change', browserSync.reload);
    gulp.watch("app/js/**/*.js").on('change', browserSync.reload);
    gulp.watch("app/block/**/*.js").on('change', browserSync.reload);
});


gulp.task('sassCompile', function() {
    return gulp.src([
        'node_modules/normalize.css/normalize.css',
        'node_modules/slick-carousel/slick/slick.css',
        'node_modules/animate.css/animate.css',
        'app/block/**/*.scss'
    ])
    .pipe(concat('compile.scss'))
    .pipe(gulp.dest("app/scss"))
    .pipe(browserSync.stream());
});
gulp.task('sass', function() {
    return gulp.src('app/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest("app/css"))
    .pipe(browserSync.stream());
});


gulp.task('libsJs', function(){
    return gulp.src([
      'node_modules/slick-carousel/slick/slick.js',
    ])
      .pipe(concat('libs.js'))
      .pipe(gulp.dest('app/js'))
      .pipe(browserSync.stream());
  });



gulp.task('useref', function() {
    return gulp.src('app/**/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});

gulp.task('images', function(){
    return gulp.src('app/img/**/*.+(png|jpg|jpeg|gif|svg)')
    .pipe(cache(imagemin({
        interlaced: true
      })))
    .pipe(gulp.dest('dist/img'))
});

gulp.task('clear', function (done) {
    return cache.clearAll(done);
});

gulp.task('fonts', function() {
    return gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))
});

gulp.task('libs', function() {
    return gulp.src('app/libs/**/*')
    .pipe(gulp.dest('dist/libs'))
});

gulp.task('docs', function() {
    return gulp.src('app/docs/*/*')
    .pipe(gulp.dest('dist/docs'))
});

gulp.task('favicon', function() {
    return gulp.src('app/favicon/*')
    .pipe(gulp.dest('dist/favicon'))
});


gulp.task('clean:dist', async function() {
    return del.sync('dist/');
})

gulp.task('build', gulp.series('clean:dist', gulp.parallel('libsJs', 'sassCompile', 'sass',  'useref', 'images', 'fonts', 'libs', 'docs', 'favicon')))
gulp.task('default', gulp.series(gulp.parallel('libsJs', 'sassCompile', 'sass'), 'serve') )
  
