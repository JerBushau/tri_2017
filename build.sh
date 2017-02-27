#!/usr/bin/env bash

build() {
  mkdir build/
  mkdir build/style
  mkdir build/style/css

  cp -avr images/ build/images/ 
  cp -avr scripts/ build/scripts/ 
  cp -avr style/vendor/ build/style/vendor/ 
  cp -avr style/fonts/ build/style/fonts/
  cp -av style/css/main.css build/style/css/main.css 
  cp -av index.html build/index.html

  node_modules/.bin/postcss -u autoprefixer -r build/style/css/main.css
}

if [ -e build/ ] 
then
  rm -rv build/ 
  build
else
  build
fi 

