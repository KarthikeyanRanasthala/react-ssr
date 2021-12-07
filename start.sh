#!/bin/bash

rm -rf dist
npx tsc --project ./server
cp ./server/index.html ./dist/server

rm -rf client-tsc-temp-dist
npx tsc --project ./client

npx webpack ./client-tsc-temp-dist/client/index.js -o ./dist/public --mode production
rm -rf client-tsc-temp-dist

node ./dist/server/index.js