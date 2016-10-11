const gulp = require('gulp');
const postcss = require('gulp-postcss');
const plugins = require('.');
const serve = require('gulp-serve');
const ghPages = require('gulp-gh-pages');
const run = require('gulp-run');

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

gulp.task('kss', () =>
  run('npm run kss').exec()
);

gulp.task('deploy', ['build'], () =>
  gulp
    .src('build/**/*')
    .pipe(ghPages())
);


gulp.task('serve', serve(['build']));

gulp.task('watch', ['build'], () =>
  gulp.watch(['./src/**/*.css', './index.css'], ['css', 'kss'])
);

gulp.task('build', ['css', 'fonts', 'kss']);
gulp.task('start', ['watch', 'serve']);
gulp.task('default', ['build']);