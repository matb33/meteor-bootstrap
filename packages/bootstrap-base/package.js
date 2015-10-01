Package.describe({
  name: 'matb33:bootstrap-base',
  summary: 'Bootstrap 3.3.4: base',
  version: '10.0.0',
  git: 'https://github.com/matb33/meteor-bootstrap.git',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.2.0.2');
  api.use('less', 'client');
  api.addFiles([
    'mixins/alerts.less',
    'mixins/background-variant.less',
    'mixins/border-radius.less',
    'mixins/buttons.less',
    'mixins/center-block.less',
    'mixins/clearfix.less',
    'mixins/forms.less',
    'mixins/gradients.less',
    'mixins/grid-framework.less',
    'mixins/grid.less',
    'mixins/hide-text.less',
    'mixins/image.less',
    'mixins/labels.less',
    'mixins/list-group.less',
    'mixins/nav-divider.less',
    'mixins/nav-vertical-align.less',
    'mixins/opacity.less',
    'mixins/pagination.less',
    'mixins/panels.less',
    'mixins/progress-bar.less',
    'mixins/reset-filter.less',
    'mixins/resize.less',
    'mixins/responsive-visibility.less',
    'mixins/size.less',
    'mixins/tab-focus.less',
    'mixins/table-row.less',
    'mixins/text-emphasis.less',
    'mixins/text-overflow.less',
    'mixins/vendor-prefixes.less',
    'mixins.less',
    'normalize.less',
    'responsive-utilities.less',
    'scaffolding.less',
    'utilities.less',
    'variables.less'
  ], 'client', {isImport: true});
  api.addFiles('base.less', 'client');
});