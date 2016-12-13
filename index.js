module.exports = dep => {
  return [
    require('stylelint'),
    require('autoprefixer')('last 2 version'),
    require('postcss-import')({
      addDependencyTo: dep
    }),
    require('postcss-mixins'),
    require('postcss-for'),
    require('postcss-each'),
    require('postcss-simple-vars'),
    require('cssnano')(),
    require('postcss-reporter')()
  ];
}