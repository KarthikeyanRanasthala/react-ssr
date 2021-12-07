#!/bin/bash

rm -rf dist
npx tsc --project ./server
cp -r ./server/views ./dist/views

node ./dist/index.js