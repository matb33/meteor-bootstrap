Package.describe({
  summary: "Bootstrap: popover",
  version: "3.3.4"
});

Package.onUse(function (api) {
  api.use('bootstrap-base', 'client');
  api.use(['bootstrap-tooltip', 'jquery', 'less'], 'client');
  api.addFiles(['popover.js', 'popovers.less'], 'client');
});