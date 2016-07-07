var gulp = require('gulp'),
    sass = require('gulp-sass'),
    gulpif = require('gulp-if'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat');
    uglify = require('gulp-uglify');
    sourcemaps = require('gulp-sourcemaps');

var outputDir,
    jsSources,
    sassStyle;

cssSources = [
  'css/bootstrap.min.css',
  'css/styles.css'
];

jsSources = [
  'assets/scripts/*.js',
  'assets/scripts/controllers/*.js'
];

gulp.task('sass', function(){
  return gulp.src('assets/sass/styles.sass')
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('css', function(){
	gulp.src(cssSources)
    .pipe(concat('styles.min.css'))
		.pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('js', function() {
  gulp.src(jsSources)
      .pipe(concat('scripts.js'))
      .pipe(uglify())
      .pipe(gulp.dest('js'))
      .pipe(browserSync.reload({
        stream: true
      }));
});

gulp.task('html', function(){
	gulp.src('*.html')
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('templates', function(){
	gulp.src('templates/*')
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('misc', function(){
	// gulp.src(['js/*.json', 'fonts/*'])
  //   .pipe(browserSync.reload({
  //     stream: true
  //   }));
});

gulp.task('watch', ['browserSync', 'js', 'misc', 'sass', 'css', 'templates'], function(){
  gulp.watch('assets/sass/*.sass', ['sass']);
  gulp.watch('css/*.css', ['css']);
  gulp.watch('*.html', ['html']);
  gulp.watch('templates/*.html', ['html']);
  gulp.watch(jsSources, ['js']);
});

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: "./"
    },
  });
});

gulp.task('default', ['sass', 'css', 'js', 'html', 'templates', 'misc', 'watch']);
