Package.describe({
  summary: 'Bootstrap: modal js',
  version: '3.3.4',
  git: 'https://github.com/matb33/meteor-bootstrap.git'
});

Package.onUse(function (api) {
  api.use('matb33:bootstrap-base', 'client');
  api.use(['matb33:bootstrap-modals', 'matb33:bootstrap-transition-js', 'jquery'], 'client');
  api.addFiles('modal.js', 'client');
});