"use strict";
const runAll = require("npm-run-all");

runAll(["build", "upload"], {
  parallel: true,
  stdout: process.stdout,
  stdin: process.stdin
}).catch(({results}) => {
  console.error(results);
  if (!results) return;
  results
    .filter(({code}) => code)
    .forEach(({name}) => {
      console.log(`"npm run ${name}" was failed`);
    })
  ;
});
