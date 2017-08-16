/*! Copyright Disney. All rights reserved. */
/* jshint -W106, node:true */

'use strict';
var _ = require('lodash');
var gruntTasks = require('wdpr-grunt-tasks');

var config = require('./src/static/config');

module.exports = function(grunt) {

    gruntTasks.util.loadTask(grunt, 'grunt-json-merge');

    var options = {
        multiApp: config.get('proxyCfg'),
        appDynamics: config.get('appDynamics.enabled') && config.get('appDynamics.config')
    };

    // Configure Tasks
    var taskCfg = gruntTasks.loadTaskSet('client-app', grunt, options);
    grunt.initConfig(taskCfg);

    // Register Extra Tasks
    grunt.registerTask('build-library-dev', _.noop);
    grunt.registerTask('build-library-prod', _.noop);
    grunt.registerTask('default', ['analyze', 'test']);
    // [ Additional aliases can be configured here... ]
};
