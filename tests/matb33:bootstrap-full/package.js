Package.describe({
  summary: "Bootstrap: use all styles and js",
  version: "3.3.4",
  git: "https://github.com/matb33/meteor-bootstrap.git"
});

Package.onUse(function (api) {
  api.use('matb33:bootstrap-base', 'client');
  api.use([
    'matb33:bootstrap-affix-js',
    'matb33:bootstrap-alert-js',
    'matb33:bootstrap-alerts',
    'matb33:bootstrap-badges',
    'matb33:bootstrap-breadcrumbs',
    'matb33:bootstrap-button-groups',
    'matb33:bootstrap-button-js',
    'matb33:bootstrap-buttons',
    'matb33:bootstrap-carousel',
    'matb33:bootstrap-close-icon',
    'matb33:bootstrap-code',
    'matb33:bootstrap-collapse-js',
    'matb33:bootstrap-component-animations',
    'matb33:bootstrap-dropdowns',
    'matb33:bootstrap-forms',
    'matb33:bootstrap-glyphicons',
    'matb33:bootstrap-grid',
    'matb33:bootstrap-input-groups',
    'matb33:bootstrap-jumbotron',
    'matb33:bootstrap-labels',
    'matb33:bootstrap-list-group',
    'matb33:bootstrap-media-items',
    'matb33:bootstrap-modal-js',
    'matb33:bootstrap-modals',
    'matb33:bootstrap-navbar',
    'matb33:bootstrap-navs',
    'matb33:bootstrap-pager',
    'matb33:bootstrap-pagination',
    'matb33:bootstrap-panels',
    'matb33:bootstrap-popovers',
    'matb33:bootstrap-print',
    'matb33:bootstrap-progress-bars',
    'matb33:bootstrap-responsive-embed',
    'matb33:bootstrap-scrollspy-js',
    'matb33:bootstrap-tab-js',
    'matb33:bootstrap-tables',
    'matb33:bootstrap-theme',
    'matb33:bootstrap-thumbnails',
    'matb33:bootstrap-tooltip',
    'matb33:bootstrap-transition-js',
    'matb33:bootstrap-type',
    'matb33:bootstrap-wells'
  ], 'client');
});