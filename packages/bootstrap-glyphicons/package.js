Package.describe({
  summary: "Bootstrap: glyphicons",
  version: "3.3.4"
});

Package.onUse(function (api) {
  api.use('bootstrap-base', 'client');
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