Package.describe({
  summary: "Bootstrap: dropdowns",
  version: "3.3.4"
});

Package.onUse(function (api) {
  api.use('bootstrap-base', 'client');
  api.use(['jquery', 'less'], 'client');
  api.addFiles(['dropdown.js', 'dropdowns.less'], 'client');
});