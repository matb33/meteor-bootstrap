Package.describe({
  name: 'matb33:bootstrap-tab-js',
  summary: 'Bootstrap: tab js',
  version: '3.3.4',
  git: 'https://github.com/matb33/meteor-bootstrap.git',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.use('matb33:bootstrap-base@3.3.4', 'client');
  api.use(['matb33:bootstrap-navs@3.3.4', 'matb33:bootstrap-transition-js@3.3.4', 'jquery'], 'client');
  api.addFiles('tab.js', 'client');
});