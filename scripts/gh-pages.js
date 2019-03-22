const ghpages = require('gh-pages');
const path = require('path');
const pkg = require('../projects/ng-lightning/package.json');

ghpages.clean();
ghpages.publish(path.join(__dirname, '../dist/ng-lightning-app'), {
  message: 'chore(release): v' + pkg.version,
}, function (err) {
  if (err) {
    console.log('Error while publishing demo.', err);
    throw err;
  }
  console.log('Demo published!');
});
