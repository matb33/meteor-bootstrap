Package.describe({
  summary: "Bootstrap: wells",
  version: "3.3.4"
});

Package.onUse(function (api) {
  api.use('bootstrap-base', 'client');
  api.use('less', 'client');
  api.addFiles('wells.less', 'client');
});