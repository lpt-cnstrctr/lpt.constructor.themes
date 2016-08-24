module.exports = dep => {
  return [
    require('stylelint'),
    require('autoprefixer')('last 2 version'),
    require('postcss-import')({
      addDependencyTo: dep
    }),
    require('postcss-url'),
    require('postcss-mixins'),
    require('postcss-for'),
    require('postcss-nested'),
    require('postcss-each'),
    require('cssnano')()
  ];
}