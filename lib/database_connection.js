module.exports = function (app, credentials) {

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
        mongoose.connect(credentials.mongo.development.connectionString, opts); // connect to mongoose using the credentials file
        break;

    case 'production':
        mongoose.connect(credentials.mongo.production.connectionString, opts);
        break;

    default:
        throw new Error('Unknown environment found for database connection' + app.get('env'));

    }

};