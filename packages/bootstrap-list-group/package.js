Package.describe({
  name: 'matb33:bootstrap-list-group',
  summary: 'Bootstrap: list group',
  version: '3.3.4',
  git: 'https://github.com/matb33/meteor-bootstrap.git'
});

Package.onUse(function (api) {
  api.use('matb33:bootstrap-base', 'client');
  api.use('less', 'client');
  api.addFiles('list-group.less', 'client');
});