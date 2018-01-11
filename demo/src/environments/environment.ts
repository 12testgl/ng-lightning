// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const pkg = require('../../package.json');
const dateFormat = require('dateformat');

export const environment = {
  production: false,
  version: JSON.stringify(pkg.version),
  now: JSON.stringify(dateFormat(new Date(), 'dd mmm yyyy')),
};