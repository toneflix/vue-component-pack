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

help() {
    echo ""
    echo "Usage: $0 [<package>]"
    echo ""
    exit
}

# Loop through the arguments and perform a related action
for opt in "$@"; do
    case $opt in
    -h)
        help
        ;;
    esac
done

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

cd "$SCRIPT_DIR/packages/$package"
pnpm run docs:build
cp -r "$SCRIPT_DIR/packages/$package/docs/images" "$SCRIPT_DIR/packages/$package/docs/.vitepress/dist/images"
cd "docs/.vitepress/dist"
rm -rf "$SCRIPT_DIR/docs/$package"
cp -r "./" "$SCRIPT_DIR/docs/$package"
cd "$SCRIPT_DIR/docs"
cp "../.gitignore" "$SCRIPT_DIR/docs/.gitignore"

git init
git add -A
git commit -m "Deploy docs for $package"

git push -f git@github.com:toneflix/vue-component-pack main:gh-pages
rm -rf .git

# cd -

# cd "$SCRIPT_DIR"
# git add .
# git status
# git commit -m "Deploy docs for $package"
# git push -f git@github.com:toneflix/vue-component-pack main:gh-pages
