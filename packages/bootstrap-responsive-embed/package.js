Package.describe({
  summary: "Bootstrap: responsive embed",
  version: "3.3.4"
});

Package.onUse(function (api) {
  api.use('bootstrap-base', 'client');
  api.use('less', 'client');
  api.addFiles('responsive-embed.less', 'client');
});