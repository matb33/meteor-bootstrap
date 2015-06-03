Package.describe({
  summary: "Bootstrap: navbar",
  version: "3.3.4"
});

Package.onUse(function (api) {
  api.use('bootstrap-base', 'client');
  api.use(['bootstrap-navs'], 'client', { weak: true });	// due to specificity issues, navs has to be loaded before this package
  api.use(['bootstrap-forms', 'less'], 'client');
  api.addFiles('navbar.less', 'client');
});