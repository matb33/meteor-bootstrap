Package.describe({
  summary: "Bootstrap: button js",
  version: "3.3.4"
});

Package.onUse(function (api) {
  api.use('bootstrap-base', 'client');
  api.use(['bootstrap-buttons', 'jquery'], 'client');
  api.addFiles('button.js', 'client');
});