const gulp = require('gulp');
const postcss = require('gulp-postcss');
const plugins = require('.');
const serve = require('gulp-serve');
const ghPages = require('gulp-gh-pages');

gulp.task('css', () =>
  gulp
    .src('./index.css')
    .pipe(postcss(plugins()))
    .pipe(gulp.dest('./build'))
);

gulp.task('fonts', () =>
  gulp
    .src(['./src/fonts/*', '!./src/fonts/*.css'])
    .pipe(gulp.dest('./build/src/fonts'))
);

gulp.task('deploy', () =>
  gulp
    .src('build/**/*')
    .pipe(ghPages())
);

gulp.task('serve', serve(['build']));

gulp.task('watch', ['default'], () =>
  gulp.watch(['./src/**/*.css', './index.css'], ['css'])
);

gulp.task('start', ['watch', 'serve']);
gulp.task('default', ['css', 'fonts']);