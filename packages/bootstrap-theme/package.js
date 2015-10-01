Package.describe({
  name: 'matb33:bootstrap-theme',
  summary: 'Bootstrap 3.3.4: default theme',
  version: '10.0.0',
  git: 'https://github.com/matb33/meteor-bootstrap.git',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.2.0.2');
  api.use('matb33:bootstrap-base@10.0.0', 'client');
  api.use('less', 'client');
  api.addFiles('theme.less', 'client');
});