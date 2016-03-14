'use strict';

const shell = require('shelljs'),
  request = require('request'),
  inquirer = require('inquirer'),
  q = require('q'),
  pathPrefix = '/raw/ng-lightning/ng-lightning/pull/';

function requestConfigInfo() {
  var deferred = q.defer();
  inquirer.prompt([
    {
      type: 'input',
      name: 'prno',
      message: 'Which PR number would you like to merge?'
    },
    {
      type: 'confirm',
      name: 'append',
      message: `Append PR No. to comment message?`,
      default: false
    },
    {
      type: 'confirm',
      name: 'test',
      message: `Would you like to run the tests as well?`,
      default: true
    }
  ], function (answers) {
    deferred.resolve(answers);
  });
  return deferred.promise;
}

function requestMergePush(config) {
  var deferred = q.defer();
  inquirer.prompt([
    {
      type: 'confirm',
      name: 'pushMerge',
      message: `Would you like to push the changes as well?`,
      default: false
    }
  ], function (answers) {
    config.pushMerge = answers.pushMerge;
    deferred.resolve(config);
  });
  return deferred.promise;
}

function ghpr(config, done) {
  let prno = config.prno,
    append = config.append,
    test = config.test;
  let path = `${pathPrefix}${prno}.patch`;
  console.log('Requesting Patch from github.com');
  request(`http://patch-diff.githubusercontent.com${path}`, (err, res, body) => {
    if (err || res.statusCode !== 200) return console.log('Error while getting the patch: ', err);
    console.log('Got Patch from github.com');
    let patchFile = `${shell.tempdir()}/gh-${prno}`;
    shell.rm(patchFile);
    body.to(patchFile);
    console.log(`Wrote Patch to file: ${patchFile}`);

    console.log(`Applying Patch to master`);
    shell.exec(`git am -3 ${patchFile}`, (code) => {
      if (code !== 0) return;
      console.log(`Patch applied to master`);

      if (test) runTests(() => {
        if (!append) return done();
        shell.exec(`git show --format=%B HEAD -s`, (code, out) => {
          if (code !== 0) return;
          let commitmsg = [out, `Closes #${prno}`].join('\n\n');
          let patchFileMsg = `${patchFile}-msg`;
          shell.rm(patchFileMsg);
          commitmsg.to(patchFileMsg);
          shell.exec(`git commit --amend -F ${patchFileMsg}`, () => {
            done();
          });
        });
      });
    });
  });
}

function ghprb(config) {
  shell.exec(`git checkout master`);
  shell.exec(`git checkout -b pr${config.prno}`, (code) => {
    if (code !== 0) return;
    ghpr(config, push(config.prno));
  });
}

function runTests(done) {
  console.log(`Running tests`);
  shell.exec(`npm test`, (code) => {
    if (code !== 0) return console.log('Tests did not pass!');
    console.log(`All tests passed!`);
    done();
  });
}

function pushMerge(prno) {
  console.log(`Pushing master`);
  shell.exec(`git push origin pr${prno}:master`, (code) => {
    if (code !== 0) return console.log('Something went wrong while pushing to github.com');
    console.log(`PR incorporated!`);

    console.log(`Deleting PR branch`);
    shell.exec(`git checkout master && git branch -D pr${prno}`, (code) => {
      if (code !== 0) return console.log('Could not delete PR branch');
      console.log('PR branch deleted!');

      console.log('Synchronizing with upstream!');
      shell.exec('git pull --rebase', (code) => {
        if (code !== 0) return console.log('Could not synchronize with upstream!');
        console.log('Master branch is now synchronized with upstream!');
      })
    });
  });
}

function push(config) {
  return () => {
    requestMergePush(config)
      .then(config => !config.pushMerge || pushMerge(config.prno));
  }
}

// Start
requestConfigInfo()
  .then(cfg => ghprb(cfg));
