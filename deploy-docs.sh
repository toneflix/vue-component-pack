#!/bin/bash

SCRIPT_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &>/dev/null && pwd)
packages=(
    "vue-auth"
    "otp-input"
    "vue-trix"
    # "flickity-vue"
    "paystack-inline"
    "vue-csc-selector"
    "all"
    "Quit"
)

check() {
    if [ "$package" != "otp-input" ] && [ "$package" != "flickity-vue" ] && [ "$package" != "paystack-inline"] && [ "$package" != "vue-auth"] && [ "$package" != "all"]; then
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

build() {
    refresh
    cd "$SCRIPT_DIR/docs/$package"
    pnpm update && pnpm docs:build
    cp -r "$SCRIPT_DIR/docs/$package/images" "$SCRIPT_DIR/docs/$package/.vitepress/dist/images"
    cp -r "$SCRIPT_DIR/docs/$package/.vitepress/dist" "$SCRIPT_DIR/documentations/$package"

    cd "$SCRIPT_DIR/documentations"

    cp "$SCRIPT_DIR/.gitignore" "$SCRIPT_DIR/documentations/.gitignore"

    git init
    git add -A
    git commit -m "Deploy docs for $package"

    git push -f git@github.com:toneflix/vue-component-pack main:gh-pages
    rm -rf .git
    rm -rf "$SCRIPT_DIR/documentations"
}

refresh() {
    if [ ! -d "$SCRIPT_DIR/documentations" ]; then
        mkdir -p "$SCRIPT_DIR/documentations"
    fi

    for pack in "${packages[@]}"; do
        if [ "$pack" != "Quit" ] && [ "$pack" != "all" ] && [ "$pack" != $package ]; then
            rm -rf "$SCRIPT_DIR/documentations/$pack"

            if [ ! -d "$SCRIPT_DIR/docs/$pack/.vitepress/dist" ] || [ ! -f "$SCRIPT_DIR/docs/$pack/.vitepress/dist/index.html" ]; then
                cd "$SCRIPT_DIR/docs/$pack"
                pnpm update && pnpm docs:build
            fi

            cp -r "$SCRIPT_DIR/docs/$pack/images" "$SCRIPT_DIR/docs/$pack/.vitepress/dist/images"
            cp -r "$SCRIPT_DIR/docs/$pack/.vitepress/dist" "$SCRIPT_DIR/documentations/$pack"
            echo "$pack refreshed"
        fi
    done
}

if [ "$package" == "all" ]; then
    for package in "${packages[@]}"; do
        if [ "$package" != "Quit" ] && [ "$package" != "all" ]; then
            build
            echo "$package docs deployed"
        fi
    done
else
    build
    echo "$package docs deployed"
fi

# cd -

# cd "$SCRIPT_DIR"
# git add .
# git status
# git commit -m "Deploy docs for $package"
# git push -f git@github.com:toneflix/vue-component-pack main:gh-pages
