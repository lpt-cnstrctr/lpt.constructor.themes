const gulp = require('gulp');
const postcss = require('gulp-postcss');
const plugins = require('.');

gulp.task('css', () =>
  gulp
    .src('./index.css')
    .pipe(postcss(plugins()))
    .pipe(gulp.dest('./build'))
);

gulp.task('watch', ['css'], () =>
  gulp.watch(['./src/**/*.css', './index.css'], ['css'])
);

gulp.task('default', ['css']);