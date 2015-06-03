Package.describe({
  summary: "Bootstrap: use all styles and js",
  version: "3.3.4"
});

Package.onUse(function (api) {
  api.use('bootstrap-base', 'client');
  api.use([
    'bootstrap-affix-js',
    'bootstrap-alert-js',
    'bootstrap-alerts',
    'bootstrap-badges',
    'bootstrap-breadcrumbs',
    'bootstrap-button-groups',
    'bootstrap-button-js',
    'bootstrap-buttons',
    'bootstrap-carousel',
    'bootstrap-close-icon',
    'bootstrap-code',
    'bootstrap-collapse-js',
    'bootstrap-component-animations',
    'bootstrap-dropdowns',
    'bootstrap-forms',
    'bootstrap-glyphicons',
    'bootstrap-grid',
    'bootstrap-input-groups',
    'bootstrap-jumbotron',
    'bootstrap-labels',
    'bootstrap-list-group',
    'bootstrap-media-items',
    'bootstrap-modal-js',
    'bootstrap-modals',
    'bootstrap-navbar',
    'bootstrap-navs',
    'bootstrap-pager',
    'bootstrap-pagination',
    'bootstrap-panels',
    'bootstrap-popovers',
    'bootstrap-print',
    'bootstrap-progress-bars',
    'bootstrap-responsive-embed',
    'bootstrap-scrollspy-js',
    'bootstrap-tab-js',
    'bootstrap-tables',
    'bootstrap-theme',
    'bootstrap-thumbnails',
    'bootstrap-tooltip',
    'bootstrap-transition-js',
    'bootstrap-type',
    'bootstrap-wells'
  ], 'client');
});