Package.describe({
  summary: "Bootstrap: component animations",
  version: "3.3.4"
});

Package.onUse(function (api) {
  api.use('bootstrap-base', 'client');
  api.use('less', 'client');
  api.addFiles('component-animations.less', 'client');
});