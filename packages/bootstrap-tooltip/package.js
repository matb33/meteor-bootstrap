Package.describe({
  name: 'matb33:bootstrap-tooltip',
  summary: 'Bootstrap: tooltip',
  version: '3.3.4',
  git: 'https://github.com/matb33/meteor-bootstrap.git'
});

Package.onUse(function (api) {
  api.use('matb33:bootstrap-base', 'client');
  api.use(['matb33:bootstrap-transition-js', 'jquery', 'less'], 'client');
  api.addFiles(['tooltip.js', 'tooltip.less'], 'client');
});