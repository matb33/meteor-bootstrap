Package.describe({
  summary: 'Bootstrap: carousel',
  version: '3.3.4',
  git: 'https://github.com/matb33/meteor-bootstrap.git'
});

Package.onUse(function (api) {
  api.use('matb33:bootstrap-base', 'client');
  api.use(['matb33:bootstrap-transition-js', 'jquery', 'less'], 'client');
  api.addFiles(['carousel.js', 'carousel.less'], 'client');
});