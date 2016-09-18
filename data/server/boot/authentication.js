'use strict';

var ctx = require('loopback-context');
var remoteAuthToken = require('loopback-rest-remote-auth-token');
module.exports = function (app) {
    app.enableAuth();
    remoteAuthToken.client(app, ctx);
};
