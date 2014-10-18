module.exports = function (app) {

    var rest = require('connect-rest');

    var apiOptions = {
        context: '/api',
        domain: require('domain').create()
    };
    
    app.use(rest.rester(apiOptions));

};