Package.describe({
  summary: 'Bootstrap: dropdowns',
  version: '3.3.4',
  git: 'https://github.com/matb33/meteor-bootstrap.git'
});

Package.onUse(function (api) {
  api.use('matb33:bootstrap-base', 'client');
  api.use(['jquery', 'less'], 'client');
  api.addFiles(['dropdown.js', 'dropdowns.less'], 'client');
});