# Triage Fpp

TODO: describe purpose of the triageFpp sigle page application: what it does, why and when you should use it

Application _triageFpp_ is built on top of [UI Reference Architecture](https://github.disney.com/WDPR-RA-UI/docs).

**Table of contents:**

1. [Features](#features)
1. [Quick Start](#quick-start)
1. [Requirements](#requirements)
1. [Resources](#resources)
1. [Grunt Commands](#grunt-commands)
1. [Status](#status)

## Features

Application _triageFpp_ provides following features:

1. TODO: first feature
2. TODO: second feature

## Quick Start

1. Make sure your workstation is prepared according to [this documentation](https://github.disney.com/WDPR-RA-UI/docs#requirements)

1. Clone repository and enter it

  ```bash
  git clone git@github.disney.com:WDPR-RA-UI/triage-fpp.git
  cd triage-fpp
  ```

1. Install NPM and Bower dependencies

  ```bash
  npm install && bower install
  ```

1. Start application in development mode

  ```bash
  grunt serve-dev
  ```

TODO: describe additional steps

## Requirements

TODO: add dependencies, installation hints

## Resources

TODO: add links to additional information

## Grunt Commands

    grunt analyze     ~ Runs lint, style checker, and complexity analysis
    grunt test        ~ Runs karma unit tests and code coverage enforcement
    grunt serve-dev   ~ Serves the app in development mode, rebuilding when file changes are detected
    grunt serve-fast  ~ Serves the app in fast development mode
    grunt build-prod  ~ Builds a deployment artifact under the dist/ folder
    grunt serve-prod  ~ Serves the app in production mode, with minified and cache-busted assets
    grunt             ~ Defaults to `grunt analyze test`

See [wdpr-grunt-tasks readme](https://github.disney.com/WDPR-RA-UI/wdpr-grunt-tasks) for additional information.

## Status

Project is in development and active maintenance.

* [_triageFpp_ Change History](./CHANGELOG.md).
* [Issue tracker](https://github.disney.com/WDPR-RA-UI/triage-fpp/issues?state=open)
