#!/bin/bash

rm -rf dist
npx tsc --project ./server
cp -r ./server/views ./dist/views

rm -rf client-tsc-temp-dist
npx tsc --project ./client

npx webpack ./client-tsc-temp-dist/client/index.js -o ./dist/public --mode production
rm -rf client-tsc-temp-dist

node ./dist/server/index.js