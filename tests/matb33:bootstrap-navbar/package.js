Package.describe({
  summary: 'Bootstrap: navbar',
  version: '3.3.4',
  git: 'https://github.com/matb33/meteor-bootstrap.git'
});

Package.onUse(function (api) {
  api.use('matb33:bootstrap-base', 'client');
  api.use(['matb33:bootstrap-navs'], 'client', { weak: true });	// due to specificity issues, navs has to be loaded before this package
  api.use(['matb33:bootstrap-forms', 'less'], 'client');
  api.addFiles('navbar.less', 'client');
});