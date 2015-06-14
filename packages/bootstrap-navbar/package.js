Package.describe({
  name: 'matb33:bootstrap-navbar',
  summary: 'Bootstrap: navbar',
  version: '3.3.4',
  git: 'https://github.com/matb33/meteor-bootstrap.git',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.2');
  api.use('matb33:bootstrap-base@3.3.4', 'client');
  api.use(['matb33:bootstrap-navs@3.3.4'], 'client', { weak: true });	// due to specificity issues, navs has to be loaded before this package
  api.use(['matb33:bootstrap-forms@3.3.4', 'less'], 'client');
  api.addFiles('navbar.less', 'client');
});