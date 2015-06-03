Package.describe({
  summary: "Bootstrap: jumbotron",
  version: "3.3.4"
});

Package.onUse(function (api) {
  api.use('bootstrap-base', 'client');
  api.use('less', 'client');
  api.addFiles('jumbotron.less', 'client');
});