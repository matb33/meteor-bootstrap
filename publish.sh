#!/bin/bash

BASEPATH="$(dirname "$0")"
BASEPATH="$(cd "$BASEPATH" && pwd)"
CREATE_FLAG=

for i in "$@"; do
	case $i in
		--create)
			CREATE_FLAG="--create"
			shift
		;;
		# --settings=*)
		# 	SETTINGS="${i#*=}"
		# 	shift
		# ;;
		*)
			echo "Unknown option: $i"
			exit 1
		;;
	esac
done

( set -e; echo "Publishing..."
	for PACKAGE_PATH in $BASEPATH/packages/bootstrap-* ; do
		if [ -f "$PACKAGE_PATH/package.js" ]; then
			PACKAGE_NAME="$(basename "$PACKAGE_PATH")"
			echo -e "--- \033[1;35m$PACKAGE_NAME\033[0m ---"

			cd $PACKAGE_PATH && meteor publish $CREATE_FLAG
		fi
	done
); if [[ $? > 0 ]]; then echo -e "\033[0;31mFAIL\033[0m"; exit 1; else echo -e "\033[0;32mOK\033[0m"; fi