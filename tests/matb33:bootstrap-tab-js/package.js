Package.describe({
  summary: 'Bootstrap: tab js',
  version: '3.3.4',
  git: 'https://github.com/matb33/meteor-bootstrap.git'
});

Package.onUse(function (api) {
  api.use('matb33:bootstrap-base', 'client');
  api.use(['matb33:bootstrap-navs', 'matb33:bootstrap-transition-js', 'jquery'], 'client');
  api.addFiles('tab.js', 'client');
});