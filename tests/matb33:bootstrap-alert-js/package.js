Package.describe({
  summary: 'Bootstrap: alert js',
  version: '3.3.4',
  git: 'https://github.com/matb33/meteor-bootstrap.git'
});

Package.onUse(function (api) {
  api.use('matb33:bootstrap-base', 'client');
  api.use(['matb33:bootstrap-alerts', 'matb33:bootstrap-transition-js', 'jquery'], 'client');
  api.addFiles('alert.js', 'client');
});