Package.describe({
  name: 'matb33:bootstrap-progress-bars',
  summary: 'Bootstrap: progress bars',
  version: '3.3.4',
  git: 'https://github.com/matb33/meteor-bootstrap.git'
});

Package.onUse(function (api) {
  api.use('matb33:bootstrap-base', 'client');
  api.use('less', 'client');
  api.addFiles('progress-bars.less', 'client');
});