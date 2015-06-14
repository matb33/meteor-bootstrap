Package.describe({
  name: 'matb33:bootstrap-component-animations',
  summary: 'Bootstrap: component animations',
  version: '3.3.4',
  git: 'https://github.com/matb33/meteor-bootstrap.git'
});

Package.onUse(function (api) {
  api.use('matb33:bootstrap-base', 'client');
  api.use('less', 'client');
  api.addFiles('component-animations.less', 'client');
});