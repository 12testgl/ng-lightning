const pkg = require('../../../package.json');

export const environment = {
  production: true,
  version: JSON.stringify(pkg.version),
  now: new Date(),
};
