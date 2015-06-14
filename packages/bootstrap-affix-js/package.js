Package.describe({
  name: 'matb33:bootstrap-affix-js',
  summary: 'Bootstrap: affix js',
  version: '3.3.4',
  git: 'https://github.com/matb33/meteor-bootstrap.git'
});

Package.onUse(function (api) {
  api.use('matb33:bootstrap-base', 'client');
  api.use('jquery', 'client');
  api.addFiles('affix.js', 'client');
});