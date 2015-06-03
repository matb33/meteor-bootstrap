Package.describe({
  summary: "Bootstrap: input groups",
  version: "3.3.4"
});

Package.onUse(function (api) {
  api.use('bootstrap-base', 'client');
  api.use(['bootstrap-forms', 'less'], 'client');
  api.addFiles('input-groups.less', 'client');
});