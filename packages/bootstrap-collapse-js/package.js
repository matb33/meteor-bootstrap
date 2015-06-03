Package.describe({
  summary: "Bootstrap: collapse js",
  version: "3.3.4"
});

Package.onUse(function (api) {
  api.use('bootstrap-base', 'client');
  api.use(['bootstrap-transition-js', 'jquery'], 'client');
  api.addFiles('collapse.js', 'client');
});