var db_config = require('./db_config.js');
module.exports = function (app) {

    var mongoose = require('mongoose');
    var opts = {
        server: {
            socketOptions: {
                keepAlive: 1
            }
        }

    };

    switch (app.get('env')) {

    case 'development':
        mongoose.connect(db_config.mongo.development.connectionString, opts); // connect to mongoose using the db_config file
        break;

    case 'production':
        mongoose.connect(db_config.mongo.production.connectionString, opts);
        break;

    default:
        throw new Error('Unknown environment found for database connection' + app.get('env'));

    }

};