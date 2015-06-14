Package.describe({
  summary: 'Bootstrap: collapse js',
  version: '3.3.4',
  git: 'https://github.com/matb33/meteor-bootstrap.git'
});

Package.onUse(function (api) {
  api.use('matb33:bootstrap-base', 'client');
  api.use(['matb33:bootstrap-transition-js', 'jquery'], 'client');
  api.addFiles('collapse.js', 'client');
});