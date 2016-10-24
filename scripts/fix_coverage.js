'use strict';

const fs = require('fs');
const path = require('path');

const coverageFile = path.join(__dirname, '../coverage/coverage.lcov');

fs.readFile(coverageFile, 'utf8', (err, data) => {
  if (err) {
    return console.log(err);
  }
  fixCoverage(data);
});

/**
 * Fix coverage report
 */
function fixCoverage(data) {
  /**
   * Remove first two files from coverage report
   * 1. `./src/test.ts`
   * 2. `./src/polyfills.ts`
   */
  let splitPoint = nthIndex(data, 'TN:', 3);
  data = data.substring(splitPoint, data.length);
  /**
   * Remove unnecessary text
   */
  let base = path.join(__dirname, '../node_modules/');
  let remove = base + 'angular2-template-loader/index.js!';
  remove += base + 'tslint-loader/index.js!';
  data =  data.split(remove).join("");
  saveFile(data);
}

function saveFile(data) {
  fs.writeFile(coverageFile, data, function (err) {
    if (err) { return console.log(err); }
    console.log('Coverage fixed');
  });
}

// http://stackoverflow.com/a/14482123/5357459
function nthIndex(str, pat, n) {
  let L = str.length, i = -1;
  while (n-- && i++ < L) {
    i = str.indexOf(pat, i);
    if (i < 0) { break; }
  }
  return i;
}
