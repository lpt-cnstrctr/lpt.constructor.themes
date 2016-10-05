module.exports = dep => {
  return [
    require('stylelint'),
    require('autoprefixer')('last 2 version'),
    require('postcss-import')({
      addDependencyTo: dep
    }),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-each'),
    require('cssnano')(),
    require('postcss-reporter')()
  ];
}