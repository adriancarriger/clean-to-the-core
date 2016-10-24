'use strict';

const parse = require('lcov-parse');
const path = require('path');

const minCoverage = {
  lines: 100,
  functions: 100,
  branches: 100
}; // percentage

const coverageFile = path.join(__dirname, '../coverage/coverage.lcov');
parse(coverageFile, (err, data) => checkCoverae(summarize(data)) );

/**
 * Returns a summary object
 */
function summarize(data) {
  return data.reduce((total, currentData) => {
    return ['lines', 'functions', 'branches'].reduce((prevType, curType) => {
      prevType[curType] = ['found', 'hit'].reduce((prevAction, curAction) => {
        if (!total[curType]) { total[curType] = {}; }
        prevAction[curAction] = (total[curType][curAction] || 0) + currentData[curType][curAction];
        return prevAction;
      }, {});
      return prevType;
    }, {});
  }, {});
}

function checkCoverae(summary) {
  Object.keys(summary).forEach(type => {
    let percentage = (summary[type].hit / summary[type].found) * 100;
    if (percentage < minCoverage[type]) {
      console.error(`Coverage below the minimum amount of ${minCoverage[type]}% for ${type}.`);
      process.exit(1);
    }
  });
}