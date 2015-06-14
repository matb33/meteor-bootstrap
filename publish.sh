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

function rollback {
	mv "$BASEPATH/DOTMETEOR" "$BASEPATH/.meteor"
	exit $1
}

# Because we're within a Meteor app, we need to prevent Meteor from detecting
# this situation so that it doesn't try to resolve too many dependant packages
mv "$BASEPATH/.meteor" "$BASEPATH/DOTMETEOR"

( set -e; echo "Publishing..."

	publish bootstrap-base

	publish bootstrap-alerts
	publish bootstrap-transition-js
	publish bootstrap-tooltip
	publish bootstrap-navs
	publish bootstrap-forms
	publish bootstrap-modals
	publish bootstrap-buttons

	publish bootstrap-affix-js
	publish bootstrap-alert-js
	publish bootstrap-badges
	publish bootstrap-breadcrumbs
	publish bootstrap-button-groups
	publish bootstrap-button-js
	publish bootstrap-carousel
	publish bootstrap-close-icon
	publish bootstrap-code
	publish bootstrap-collapse-js
	publish bootstrap-component-animations
	publish bootstrap-dropdowns
	publish bootstrap-glyphicons
	publish bootstrap-grid
	publish bootstrap-input-groups
	publish bootstrap-jumbotron
	publish bootstrap-labels
	publish bootstrap-list-group
	publish bootstrap-media-items
	publish bootstrap-modal-js
	publish bootstrap-navbar
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
	publish bootstrap-type
	publish bootstrap-wells

	publish bootstrap-full

); if [[ $? > 0 ]]; then echo -e "\033[0;31mFAIL\033[0m"; rollback 1; else echo -e "\033[0;32mOK\033[0m"; fi

rollback 0