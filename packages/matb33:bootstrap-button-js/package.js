Package.describe({
  summary: "Bootstrap: button js",
  version: "3.3.4",
  git: "https://github.com/matb33/meteor-bootstrap.git"
});

Package.onUse(function (api) {
  api.use('matb33:bootstrap-base', 'client');
  api.use(['matb33:bootstrap-buttons', 'jquery'], 'client');
  api.addFiles('button.js', 'client');
});