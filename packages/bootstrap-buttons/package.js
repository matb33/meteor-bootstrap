Package.describe({
  name: 'matb33:bootstrap-buttons',
  summary: 'Bootstrap: buttons',
  version: '3.3.4',
  git: 'https://github.com/matb33/meteor-bootstrap.git'
});

Package.onUse(function (api) {
  api.use('matb33:bootstrap-base', 'client');
  api.use('less', 'client');
  api.addFiles('buttons.less', 'client');
});