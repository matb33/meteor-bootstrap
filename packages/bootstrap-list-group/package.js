Package.describe({
  summary: "Bootstrap: list group",
  version: "3.3.4"
});

Package.onUse(function (api) {
  api.use('bootstrap-base', 'client');
  api.use('less', 'client');
  api.addFiles('list-group.less', 'client');
});