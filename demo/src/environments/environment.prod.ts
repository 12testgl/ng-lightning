const pkg = require('../../package.json');
const dateFormat = require('dateformat');

export const environment = {
  production: true,
  version: JSON.stringify(pkg.version),
  now: JSON.stringify(dateFormat(new Date(), 'dd mmm yyyy')),
};
