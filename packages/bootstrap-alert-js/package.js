Package.describe({
  name: 'matb33:bootstrap-alert-js',
  summary: 'Bootstrap 3.3.4: alert js',
  version: '10.0.0',
  git: 'https://github.com/matb33/meteor-bootstrap.git',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.2.0.2');
  api.use('matb33:bootstrap-base@3.3.4', 'client');
  api.use(['matb33:bootstrap-alerts@3.3.4', 'matb33:bootstrap-transition-js@3.3.4', 'jquery'], 'client');
  api.addFiles('alert.js', 'client');
});