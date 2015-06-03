Package.describe({
  summary: "Bootstrap: affix js",
  version: "3.3.4"
});

Package.onUse(function (api) {
  api.use('bootstrap-base', 'client');
  api.use('jquery', 'client');
  api.addFiles('affix.js', 'client');
});