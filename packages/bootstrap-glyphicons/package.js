Package.describe({
  name: 'matb33:bootstrap-glyphicons',
  summary: 'Bootstrap 3.3.4: glyphicons',
  version: '10.0.0',
  git: 'https://github.com/matb33/meteor-bootstrap.git',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.2.0.2');
  api.use('matb33:bootstrap-base@10.0.0', 'client');
  api.use('less', 'client');
  api.addAssets([
    'glyphicons-halflings-regular.eot',
    'glyphicons-halflings-regular.svg',
    'glyphicons-halflings-regular.ttf',
    'glyphicons-halflings-regular.woff',
    'glyphicons-halflings-regular.woff2'
  ], 'client');
  api.addFiles([
    'glyphicons.less'
  ], 'client');
});