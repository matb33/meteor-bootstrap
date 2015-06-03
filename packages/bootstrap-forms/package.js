// NOTE: this package required moving several mixins to mixins.lessimport, as
// they are used in other bootstrap packages

Package.describe({
  summary: "Bootstrap: forms",
  version: "3.3.4"
});

Package.onUse(function (api) {
  api.use('bootstrap-base', 'client');
  api.use('less', 'client');
  api.addFiles([
  	'mixins.lessimport',
  	'forms.less'
  ], 'client');
});