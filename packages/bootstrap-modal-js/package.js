Package.describe({
  summary: "Bootstrap: modal js",
  version: "3.3.4"
});

Package.onUse(function (api) {
  api.use('bootstrap-base', 'client');
  api.use(['bootstrap-modals', 'bootstrap-transition-js', 'jquery'], 'client');
  api.addFiles('modal.js', 'client');
});