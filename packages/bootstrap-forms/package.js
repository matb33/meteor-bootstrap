// NOTE: this package required moving several mixins to mixins.less, as
// they are used in other bootstrap packages

Package.describe({
  name: 'matb33:bootstrap-forms',
  summary: 'Bootstrap 3.3.4: forms',
  version: '10.0.0',
  git: 'https://github.com/matb33/meteor-bootstrap.git',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.2.0.2');
  api.use('matb33:bootstrap-base@3.3.4', 'client');
  api.use('less', 'client');
  api.addFiles('mixins.less', 'client', {isImport: true});
  api.addFiles('forms.less', 'client');
});