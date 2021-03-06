/**
 * @link https://github.com/datarhei/restreamer
 * @copyright 2015 datarhei.org
 * @license Apache-2.0
 */

'use strict';

// Global config for frontend
const config = {
    'urls': {
        // project
        'issueTracker': 'https://github.com/datarhei/restreamer/issues/new',
        'projectPage': 'https://github.com/datarhei/restreamer',
        'updatePage': 'https://datarhei.github.io/restreamer/docs/guides-updates.html',

        // help
        'embedPlayerHelp': 'https://datarhei.github.io/restreamer/docs/guides-embedding.html',
        'portForwardingHelp': 'https://datarhei.github.io/restreamer/wiki/portforwarding.html',
        'rtmpServerHelp': 'https://datarhei.github.io/restreamer/docs/guides-external-rtmp.html'

    }
};

window.angular.module('app').constant('config', config);
