Package.describe({
  summary: "Bootstrap: scrollspy js",
  version: "3.3.4"
});

Package.onUse(function (api) {
  api.use('bootstrap-base', 'client');
  api.use(['jquery'], 'client');
  api.addFiles('scrollspy.js', 'client');
});