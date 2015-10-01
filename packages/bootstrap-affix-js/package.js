Package.describe({
  name: 'matb33:bootstrap-affix-js',
  summary: 'Bootstrap: affix js',
  version: '3.3.4',
  git: 'https://github.com/matb33/meteor-bootstrap.git',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.2.0.2');
  api.use('matb33:bootstrap-base@3.3.4', 'client');
  api.use('jquery', 'client');
  api.addFiles('affix.js', 'client');
});