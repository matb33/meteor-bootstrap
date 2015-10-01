Package.describe({
  name: 'matb33:bootstrap-collapse-js',
  summary: 'Bootstrap: collapse js',
  version: '3.3.4',
  git: 'https://github.com/matb33/meteor-bootstrap.git',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.2.0.2');
  api.use('matb33:bootstrap-base@3.3.4', 'client');
  api.use(['matb33:bootstrap-transition-js@3.3.4', 'jquery'], 'client');
  api.addFiles('collapse.js', 'client');
});