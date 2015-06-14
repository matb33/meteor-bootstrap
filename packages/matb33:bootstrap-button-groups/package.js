Package.describe({
  summary: "Bootstrap: button groups",
  version: "3.3.4",
  git: "https://github.com/matb33/meteor-bootstrap.git"
});

Package.onUse(function (api) {
  api.use('matb33:bootstrap-base', 'client');
  api.use(['matb33:bootstrap-buttons', 'less'], 'client');
  api.addFiles('button-groups.less', 'client');
});