#!/bin/bash

SOURCE_DIR=src;
PACK_DIR=dist/package/;
DIST_DIR=dist;
ANDROID=android;
IOS=ios;

copy_package_files() {
    cp "$SOURCE_DIR"/package.json "$PACK_DIR"
    cp "$SOURCE_DIR"/*.md "$PACK_DIR"
	cp "$SOURCE_DIR"/*.d.ts "$PACK_DIR"
}

#clean dist folder from previous compilation
rm -rf "$DIST_DIR"

#create package folder
mkdir -p "$PACK_DIR"

# compile ts
node_modules/.bin/tsc -p "$SOURCE_DIR" --outDir "$PACK_DIR"

# run tslint
node_modules/tslint/bin/tslint --project "$SOURCE_DIR"/tsconfig.json --config "$SOURCE_DIR"/tslint.json

# make commonjs bundle for ANDROID 
# node_modules/rollup/bin/rollup -c --environment PLATFORM:$ANDROID

# make commonjs bundle for IOS
# node_modules/rollup/bin/rollup -c --environment PLATFORM:$IOS

copy_package_files
