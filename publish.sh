#!/bin/bash

BASEPATH="$(dirname "$0")"
BASEPATH="$(cd "$BASEPATH" && pwd)"
FLAG=
ONLY=

for i in "$@"; do
	case $i in
		--create)
			FLAG="--create"
			shift
		;;
		--update)
			FLAG="--update"
			shift
		;;
		--only=*)
			ONLY="${i#*=}"
			shift
		;;
		*)
			echo "Unknown option: $i"
			exit 1
		;;
	esac
done

function publish {
	PACKAGE_NAME=$1
	PACKAGE_PATH="$BASEPATH/packages/$PACKAGE_NAME"

	if [ "$ONLY" == "" ] || [ "$ONLY" == "$PACKAGE_NAME" ]; then
		echo -e "--- \033[1;35m$PACKAGE_NAME\033[0m ---"

		cd $PACKAGE_PATH
		meteor publish $FLAG
	fi
}

( set -e; echo "Publishing..."

	publish bootstrap-base

	publish bootstrap-affix-js
	publish bootstrap-alert-js
	publish bootstrap-alerts
	publish bootstrap-badges
	publish bootstrap-breadcrumbs
	publish bootstrap-button-groups
	publish bootstrap-button-js
	publish bootstrap-buttons
	publish bootstrap-carousel
	publish bootstrap-close-icon
	publish bootstrap-code
	publish bootstrap-collapse-js
	publish bootstrap-component-animations
	publish bootstrap-dropdowns
	publish bootstrap-forms
	publish bootstrap-glyphicons
	publish bootstrap-grid
	publish bootstrap-input-groups
	publish bootstrap-jumbotron
	publish bootstrap-labels
	publish bootstrap-list-group
	publish bootstrap-media-items
	publish bootstrap-modal-js
	publish bootstrap-modals
	publish bootstrap-navbar
	publish bootstrap-navs
	publish bootstrap-pager
	publish bootstrap-pagination
	publish bootstrap-panels
	publish bootstrap-popovers
	publish bootstrap-print
	publish bootstrap-progress-bars
	publish bootstrap-responsive-embed
	publish bootstrap-scrollspy-js
	publish bootstrap-tab-js
	publish bootstrap-tables
	publish bootstrap-theme
	publish bootstrap-thumbnails
	publish bootstrap-tooltip
	publish bootstrap-transition-js
	publish bootstrap-type
	publish bootstrap-wells

	publish bootstrap-full

); if [[ $? > 0 ]]; then echo -e "\033[0;31mFAIL\033[0m"; exit 1; else echo -e "\033[0;32mOK\033[0m"; fi