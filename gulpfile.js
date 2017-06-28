// =============================================================================
// DEPENDENCIES
// =============================================================================

// Gulp Library
var gulp         = require('gulp');

// Gulp Plugins
var autoprefixer = require('gulp-autoprefixer');
var sass         = require('gulp-sass');
var concat       = require('gulp-concat');
var notify       = require('gulp-notify');
var livereload   = require('gulp-livereload');
var rename       = require('gulp-rename');
var imagemin     = require('gulp-imagemin');
var uglify       = require('gulp-uglify');
var newer        = require('gulp-newer');
var fileinclude  = require('gulp-file-include');
var sourcemaps   = require('gulp-sourcemaps');
var del          = require('del');
var runSequence  = require('run-sequence');
var csscomb      = require('gulp-csscomb');


// =============================================================================
// PATHS & ERROR HANDLING
// =============================================================================

// To help clean up paths, lets predefine
// any major paths we'll want to use
var srcPaths = {
  css:        'src/scss/',
  js:         'src/js/',
  img:        'src/img/'
};
var distPaths = {
  css:        'public/css/',
  js:         'public/js/',
  img:        'public/img/'
};

var onError = function(err) {
  notify.onError({
    title:    "Gulp",
    subtitle: "Failure!",
    message:  "Error: <%= error.message %>",
    sound:    "Funk"
  })(err);

  this.emit('end');
};


// =============================================================================
// TASKS
// =============================================================================

//
// TASK: SASS
// -----------------------------------------------------------------------------
// Compile our sass into css for site/application
// Be sure to switch between sass outputStyles below
//
gulp.task('sass', function() {
  return gulp.src(srcPaths.css + '**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(csscomb())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(distPaths.css))
    .pipe(livereload('start'))
    .pipe(notify({
      message: 'Sass: CSS Compiled!',
      onLast: true
    }));
});

//
// TASK: IMAGES
// -----------------------------------------------------------------------------
// We'll look for any new images in the project and
// optimize them. Supports .png, .jpg, .gif, and .svg
//
gulp.task('images', function() {
  return gulp.src(srcPaths.img + '**/*')
    .pipe(newer('img'))
    .pipe(imagemin())
    .pipe(gulp.dest(distPaths.img))
    .pipe(gulp.dest(distPaths.styleguide + 'img'));
});

//
// TASK: SCRIPTS
// -----------------------------------------------------------------------------
// Compile global script files in the project
//
gulp.task('js-global', function() {
  return gulp.src([srcPaths.js + 'global/**/*'])
    //.pipe(uglify())
    .pipe(concat('global.js'))
    .pipe(gulp.dest(distPaths.js));
});
gulp.task('js-module-dribbble', function() {
  return gulp.src([srcPaths.js + 'modules/dribbble/**/*'])
    //.pipe(uglify())
    .pipe(concat('dribbble.js'))
    .pipe(gulp.dest(distPaths.js));
});
gulp.task('js-module-scrollspeed', function() {
  return gulp.src([srcPaths.js + 'modules/scrollspeed/**/*'])
    //.pipe(uglify())
    .pipe(concat('scrollspeed.js'))
    .pipe(gulp.dest(distPaths.js));
});
gulp.task('js-module-scrollbar', function() {
  return gulp.src([srcPaths.js + 'modules/scrollbar/**/*'])
    //.pipe(uglify())
    .pipe(concat('scrollbar.js'))
    .pipe(gulp.dest(distPaths.js));
});
gulp.task('js-module-menu', function() {
  return gulp.src([srcPaths.js + 'modules/menu/**/*'])
    //.pipe(uglify())
    .pipe(concat('menu.js'))
    .pipe(gulp.dest(distPaths.js));
});
gulp.task('js-module-pjax', function() {
  return gulp.src([srcPaths.js + 'modules/pjax/**/*'])
    //.pipe(uglify())
    .pipe(concat('pjax.js'))
    .pipe(gulp.dest(distPaths.js));
});
gulp.task('js-module-parallax', function() {
  return gulp.src([srcPaths.js + 'modules/parallax/**/*'])
    //.pipe(uglify())
    .pipe(concat('parallax.js'))
    .pipe(gulp.dest(distPaths.js));
});


// =============================================================================
// WATCH & INIT
// =============================================================================

// Lets setup a series of tasks that can
// run during a watch period to help save time
gulp.task('watch', function() {
  livereload.listen();

  // watch styles
  gulp.watch(srcPaths.css + '**/*.scss', ['sass']);

  // watch scripts
  gulp.watch(srcPaths.js + 'global/**/*', ['js-global']);
  gulp.watch(srcPaths.js + 'modules/dribbble/**/*', ['js-module-dribbble']);
  gulp.watch(srcPaths.js + 'modules/scrollspeed/**/*', ['js-module-scrollspeed']);
  gulp.watch(srcPaths.js + 'modules/scrollbar/**/*', ['js-module-scrollbar']);
  gulp.watch(srcPaths.js + 'modules/menu/**/*', ['js-module-menu']);
  gulp.watch(srcPaths.js + 'modules/pjax/**/*', ['js-module-pjax']);
  gulp.watch(srcPaths.js + 'modules/parallax/**/*', ['js-module-parallax']);

});

// Lets setup a series of tasks that can
// run during a single-instance command
gulp.task('default', [
  'sass',
  'global-scripts',
  'scripts-dribbble', 'js-module-menu', 'js-module-pjax', 'js-module-parallax', 'images']);
