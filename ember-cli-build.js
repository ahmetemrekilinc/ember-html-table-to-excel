'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    snippetSearchPaths: ['tests'],

    'ember-bootstrap': {
      'bootstrapVersion': 4,
      'importBootstrapFont': false
    }
    // Add options here
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  app.import('node_modules/ember-cli-data-export-with-style/vendor/Blob.js');
  app.import('node_modules/ember-cli-data-export-with-style/vendor/FileSaver-1.3.3.js');
  app.import('node_modules/ember-cli-data-export-with-style/vendor/jszip-0.10.8.js');
  app.import('node_modules/ember-cli-data-export-with-style/vendor/xlsx.core.min.js');

  return app.toTree();
};
