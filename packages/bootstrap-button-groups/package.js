Package.describe({
  summary: "Bootstrap: button groups",
  version: "3.3.4"
});

Package.onUse(function (api) {
  api.use('bootstrap-base', 'client');
  api.use(['bootstrap-buttons', 'less'], 'client');
  api.addFiles('button-groups.less', 'client');
});