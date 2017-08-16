/*! Copyright Disney. All rights reserved. */
var gruntTasks = require('wdpr-grunt-tasks');

module.exports = function(config) {
    var karmaCfg = gruntTasks.getKarmaConfig();
    karmaCfg.preprocessors = {
        'src/**/*.html': 'ng-html2js',
        'src/client/triage-fpp/!(test-helpers)/**/!(*.spec).js': ['coverage']
    };

    config.set(karmaCfg);
};
