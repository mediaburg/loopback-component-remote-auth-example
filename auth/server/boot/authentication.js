'use strict';

var remoteAuthToken = require('loopback-rest-remote-auth-token');
module.exports = function (app) {
    app.enableAuth();
    remoteAuthToken.server(app);
};