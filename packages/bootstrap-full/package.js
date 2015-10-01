Package.describe({
  name: 'matb33:bootstrap-full',
  summary: 'Bootstrap 3.3.4: use all styles and js',
  version: '10.0.0',
  git: 'https://github.com/matb33/meteor-bootstrap.git',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.2.0.2');
  api.use('matb33:bootstrap-base@10.0.0', 'client');
  api.use([
    'matb33:bootstrap-affix-js@10.0.0',
    'matb33:bootstrap-alert-js@10.0.0',
    'matb33:bootstrap-alerts@10.0.0',
    'matb33:bootstrap-badges@10.0.0',
    'matb33:bootstrap-breadcrumbs@10.0.0',
    'matb33:bootstrap-button-groups@10.0.0',
    'matb33:bootstrap-button-js@10.0.0',
    'matb33:bootstrap-buttons@10.0.0',
    'matb33:bootstrap-carousel@10.0.0',
    'matb33:bootstrap-close-icon@10.0.0',
    'matb33:bootstrap-code@10.0.0',
    'matb33:bootstrap-collapse-js@10.0.0',
    'matb33:bootstrap-component-animations@10.0.0',
    'matb33:bootstrap-dropdowns@10.0.0',
    'matb33:bootstrap-forms@10.0.0',
    'matb33:bootstrap-glyphicons@10.0.0',
    'matb33:bootstrap-grid@10.0.0',
    'matb33:bootstrap-input-groups@10.0.0',
    'matb33:bootstrap-jumbotron@10.0.0',
    'matb33:bootstrap-labels@10.0.0',
    'matb33:bootstrap-list-group@10.0.0',
    'matb33:bootstrap-media-items@10.0.0',
    'matb33:bootstrap-modal-js@10.0.0',
    'matb33:bootstrap-modals@10.0.0',
    'matb33:bootstrap-navbar@10.0.0',
    'matb33:bootstrap-navs@10.0.0',
    'matb33:bootstrap-pager@10.0.0',
    'matb33:bootstrap-pagination@10.0.0',
    'matb33:bootstrap-panels@10.0.0',
    'matb33:bootstrap-popovers@10.0.0',
    'matb33:bootstrap-print@10.0.0',
    'matb33:bootstrap-progress-bars@10.0.0',
    'matb33:bootstrap-responsive-embed@10.0.0',
    'matb33:bootstrap-scrollspy-js@10.0.0',
    'matb33:bootstrap-tab-js@10.0.0',
    'matb33:bootstrap-tables@10.0.0',
    'matb33:bootstrap-theme@10.0.0',
    'matb33:bootstrap-thumbnails@10.0.0',
    'matb33:bootstrap-tooltip@10.0.0',
    'matb33:bootstrap-transition-js@10.0.0',
    'matb33:bootstrap-type@10.0.0',
    'matb33:bootstrap-wells@10.0.0'
  ], 'client');
});