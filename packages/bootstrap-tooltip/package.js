Package.describe({
  summary: "Bootstrap: tooltip",
  version: "3.3.4"
});

Package.onUse(function (api) {
  api.use('bootstrap-base', 'client');
  api.use(['bootstrap-transition-js', 'jquery', 'less'], 'client');
  api.addFiles(['tooltip.js', 'tooltip.less'], 'client');
});