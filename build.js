module.exports = dep => {
  return [
    require('stylelint'),
    require('autoprefixer')('last 2 version'),
    require('postcss-import')({
      addDependencyTo: dep
    }),
    require('postcss-url'),
    require('postcss-for'),
    require('postcss-mixins'),
    require('postcss-nested'),
    require('postcss-simple-vars'),
    require('postcss-conditionals'),
    require('postcss-each'),
    require('cssnano')(),
    require('postcss-reporter')()
  ];
}