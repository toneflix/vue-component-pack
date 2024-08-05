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
cp -r "$SCRIPT_DIR/$package/docs/images" "$SCRIPT_DIR/$package/docs/.vitepress/dist/images"
cd "docs/.vitepress/dist"
rm -rf "$SCRIPT_DIR/docs/$package"
cp -r "./" "$SCRIPT_DIR/docs/$package"
cd "$SCRIPT_DIR/docs"
cp "../.gitignore" "$SCRIPT_DIR/docs/.gitignore"

# git init
# git add -A
# git commit -m "deploy $package docs"

# git push -f git@github.com:toneflix/vue-component-pack main:gh-pages
# git push -f git@github.com:toneflix/toneflix.github.io.git main:toneflix-vue-docs

rm -rf "$SCRIPT_DIR/docs/.git"

# cd -

cd "$SCRIPT_DIR"
git add -A
git commit -m "deploy $package docs"
git push -f git@github.com:toneflix/toneflix.github.io.git main:toneflix-vue-docs
