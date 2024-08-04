#!/bin/bash

SCRIPT_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &>/dev/null && pwd)
packages=(
    "otp-input"
    "flickity-vue"
    "Quit"
)

check() {
    if [ "$package" != "otp-input" ] && [ "$package" != "flickity-vue" ]; then
        echo "Invalid package selected."
        exit
    fi
}

if [ $1 ]; then
    package="$1"
    check
else
    PS3='Choose package: '
    package="otp-input"
    select pac in "${packages[@]}"; do
        case $pac in
        "Quit")
            echo "User requested exit"
            exit
            ;;
        *)
            echo "$pac selected"
            package=$pac
            break
            ;;
        esac
    done
fi

# If the user

set -e

cd "$SCRIPT_DIR/$package"
yarn docs:build
cd "docs/.vitepress/dist"

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:toneflix/toneflix.github.io.git main:toneflix-vue-docs

cd -
