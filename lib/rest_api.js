module.exports = function (app, rest) {

    var apiOptions = {
        context: '/api',
        domain: require('domain').create()
    };
    
    app.use(rest.rester(apiOptions));


};