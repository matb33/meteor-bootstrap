Package.describe({
  summary: "Bootstrap: tab js",
  version: "3.3.4"
});

Package.onUse(function (api) {
  api.use('bootstrap-base', 'client');
  api.use(['bootstrap-navs', 'bootstrap-transition-js', 'jquery'], 'client');
  api.addFiles('tab.js', 'client');
});