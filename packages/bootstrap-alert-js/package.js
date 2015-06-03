Package.describe({
  summary: "Bootstrap: alert js",
  version: "3.3.4"
});

Package.onUse(function (api) {
  api.use('bootstrap-base', 'client');
  api.use(['bootstrap-alerts', 'bootstrap-transition-js', 'jquery'], 'client');
  api.addFiles('alert.js', 'client');
});