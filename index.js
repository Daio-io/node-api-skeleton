var express = require('express');
var app = express();
var rest = require('connect-rest');

var domain = require('./lib/domain.js')(app); // set up a domain for the app

app.use(express.static(__dirname + '/public')); // serve this content to the client without special handling (static)
require('./lib/middleware.js')(app); // app middleware in here

require('./lib/environment_context.js')(app);

require('./lib/rest_api.js')(app, rest);
require('./api/routes.js')(app, rest);

// ** UPDATE db_config.js FOR CONNECTION STRINGS TO DATABASE **
var database = require('./lib/database_connection.js')(app);

require('./lib/server.js')(app);