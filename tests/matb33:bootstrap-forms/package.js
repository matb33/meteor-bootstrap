// NOTE: this package required moving several mixins to mixins.import.less, as
// they are used in other bootstrap packages

Package.describe({
  summary: "Bootstrap: forms",
  version: "3.3.4",
  git: "https://github.com/matb33/meteor-bootstrap.git"
});

Package.onUse(function (api) {
  api.use('matb33:bootstrap-base', 'client');
  api.use('less', 'client');
  api.addFiles([
  	'mixins.import.less',
  	'forms.less'
  ], 'client');
});