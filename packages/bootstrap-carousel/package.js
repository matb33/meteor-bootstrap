Package.describe({
  summary: "Bootstrap: carousel",
  version: "3.3.4"
});

Package.onUse(function (api) {
  api.use('bootstrap-base', 'client');
  api.use(['bootstrap-transition-js', 'jquery', 'less'], 'client');
  api.addFiles(['carousel.js', 'carousel.less'], 'client');
});