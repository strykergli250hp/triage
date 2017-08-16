/*! Copyright Disney. All rights reserved. */
'use strict';

var path = require('path');
var config = require('./src/static/config');

module.exports = {

    // Wiredep options
    wiredepOptions: {
        // @see Wiredep Command Line options:
        // https://github.com/taptapship/wiredep#configuration
        // Here are some common settings...
        //
        // devDependencies: true, // <-- injects bower devDependencies
        //
        // exclude: [             // <-- List of patterns to exclude
        //     /mocks/,
        //     /jquery\.js/,
        //     /bootstrap\.js/
        // ],
        //
        overrides: {           // <-- List of overrides for other bower components
            'lodash': {
                'main': 'dist/lodash.js'
            },
            // To make ng-hide directive work when a CSP rule is blocking inline styles,
            // you must link to the angular-csp.css in your HTML manually.
            // https://docs.angularjs.org/api/ng/directive/ngCsp
            'angular': {
                'main': [
                    'angular.js',
                    'angular-csp.css'
                ]
            }
        }
    },

    // Client
    client: {
        srcFiles: [
            'src/client/triage-fpp/components/**/*.js',
            'src/client/triage-fpp/core/**/*.js',
            'src/client/triage-fpp/features/**/*.js',
            'src/client/triage-fpp/layout/**/*.js',
            'src/client/triage-fpp/*.js',
            'src/client/triage-fpp/mpropz/**/*.js',
            '!src/client/triage-fpp/**/*.spec.js'
        ],
        testHelpers: ['src/client/triage-fpp/test-helpers/**/*.js'],
        destStylesSubdir:  'assets',
        destScriptsSubdir: 'assets',
        staticFiles: 'src/client/**/*.ico',

        srcBaseDirs: [
            'src/client',
            'src/client/triage-fpp/layout/assets',
            'src/static'
        ],

        lessFile: 'src/client/triage-fpp/layout/assets/styles/triage-fpp.less',

        assets: [
            'src/client/triage-fpp/layout/assets/**',
            '!**/*.less',
            '!src/client/**/*.ico'
        ],

        ngModuleFiles: ['src/client/**/*.module.js'],
        ngTemplateFiles: ['src/client/**/*.html'],
        ngTemplateModule: 'triageFpp',
        ngTemplateCacheURLCallback: function(url) {
            return url.replace('src/client/', '/');
        },

        copyDev: [
            {
               cwd: 'src/client',
               src: ['**/i18n/**/*.json'],
               dest: 'dist/client',
               expand: true
            },
            {
                expand: true,
                cwd: 'src/static/config/',
                src: ['./**'],
                dest: '<%= buildConfig.staticServer.destDir %>/config/',
            }
        ],

        copyProd: [
            {
               cwd: 'src/client',
               src: ['**/i18n/**/*.json'],
               dest: 'dist/client',
               expand: true
            }
        ],

        watchFiles: ['src/client/**/*'],

        coverageThresholds: {
            'statements': 80,
            'branches':   80,
            'lines':      80,
            'functions':  80
        }
    },

    // Static Server
    staticServer: {
        srcFiles: [
            'src/static/**/*.{js,json}',
            '!src/static/config/env-properties.json',
            '!src/static/config/multi-app.js'
        ],
        destDir: 'dist/static',
        srcBaseDirs: ['src/static'],
        main: 'dist/static/vip.js',
        port: config.get(process.argv.indexOf('--multiAppHost') >= 0 ? 'proxyPort' : 'port'),
        watchFiles: ['src/static/**/*']
    },

    build: {
        nodeEnv: false
    }
};
