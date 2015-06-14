Package.describe({
  summary: "Bootstrap: base",
  version: "3.3.4",
  git: "https://github.com/matb33/meteor-bootstrap.git"
});

Package.onUse(function (api) {
  api.use('less', 'client');
  api.addFiles([
  	'mixins.import.less',
  	'mixins/alerts.import.less',
  	'mixins/background-variant.import.less',
  	'mixins/border-radius.import.less',
  	'mixins/buttons.import.less',
  	'mixins/center-block.import.less',
  	'mixins/clearfix.import.less',
  	'mixins/forms.import.less',
  	'mixins/gradients.import.less',
  	'mixins/grid-framework.import.less',
  	'mixins/grid.import.less',
  	'mixins/hide-text.import.less',
  	'mixins/image.import.less',
  	'mixins/labels.import.less',
  	'mixins/list-group.import.less',
  	'mixins/nav-divider.import.less',
  	'mixins/nav-vertical-align.import.less',
  	'mixins/opacity.import.less',
  	'mixins/pagination.import.less',
  	'mixins/panels.import.less',
  	'mixins/progress-bar.import.less',
  	'mixins/reset-filter.import.less',
  	'mixins/resize.import.less',
  	'mixins/responsive-visibility.import.less',
  	'mixins/size.import.less',
  	'mixins/tab-focus.import.less',
  	'mixins/table-row.import.less',
  	'mixins/text-emphasis.import.less',
  	'mixins/text-overflow.import.less',
  	'mixins/vendor-prefixes.import.less',
  	'normalize.import.less',
  	'responsive-utilities.import.less',
  	'scaffolding.import.less',
  	'utilities.import.less',
  	'variables.import.less',
  	'base.less'
  ], 'client');
});