Package.describe({
  name: 'matb33:bootstrap-glyphicons',
  summary: 'Bootstrap: glyphicons',
  version: '3.3.4',
  git: 'https://github.com/matb33/meteor-bootstrap.git',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.2');
  api.use('matb33:bootstrap-base@3.3.4', 'client');
  api.use('less', 'client');
  api.addFiles([
    'glyphicons-halflings-regular.eot',
    'glyphicons-halflings-regular.svg',
    'glyphicons-halflings-regular.ttf',
    'glyphicons-halflings-regular.woff',
    'glyphicons-halflings-regular.woff2',
    'glyphicons.less'
  ], 'client');
});