Package.describe({
  summary: "Bootstrap: base",
  version: "3.3.4"
});

Package.onUse(function (api) {
  api.use('less', 'client');
  api.addFiles([
  	'mixins.lessimport',
  	'mixins/alerts.lessimport',
  	'mixins/background-variant.lessimport',
  	'mixins/border-radius.lessimport',
  	'mixins/buttons.lessimport',
  	'mixins/center-block.lessimport',
  	'mixins/clearfix.lessimport',
  	'mixins/forms.lessimport',
  	'mixins/gradients.lessimport',
  	'mixins/grid-framework.lessimport',
  	'mixins/grid.lessimport',
  	'mixins/hide-text.lessimport',
  	'mixins/image.lessimport',
  	'mixins/labels.lessimport',
  	'mixins/list-group.lessimport',
  	'mixins/nav-divider.lessimport',
  	'mixins/nav-vertical-align.lessimport',
  	'mixins/opacity.lessimport',
  	'mixins/pagination.lessimport',
  	'mixins/panels.lessimport',
  	'mixins/progress-bar.lessimport',
  	'mixins/reset-filter.lessimport',
  	'mixins/resize.lessimport',
  	'mixins/responsive-visibility.lessimport',
  	'mixins/size.lessimport',
  	'mixins/tab-focus.lessimport',
  	'mixins/table-row.lessimport',
  	'mixins/text-emphasis.lessimport',
  	'mixins/text-overflow.lessimport',
  	'mixins/vendor-prefixes.lessimport',
  	'normalize.lessimport',
  	'responsive-utilities.lessimport',
  	'scaffolding.lessimport',
  	'utilities.lessimport',
  	'variables.lessimport',
  	'base.less'
  ], 'client');
});