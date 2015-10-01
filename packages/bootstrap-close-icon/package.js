Package.describe({
  name: 'matb33:bootstrap-close-icon',
  summary: 'Bootstrap: close icon',
  version: '3.3.4',
  git: 'https://github.com/matb33/meteor-bootstrap.git',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.2.0.2');
  api.use('matb33:bootstrap-base@3.3.4', 'client');
  api.use('less', 'client');
  api.addFiles('close.less', 'client');
});