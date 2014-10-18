//Adding middleware to create an app domain. This allows for catching uncaught exceptions
// a domain is basically an execution context that will catch errors which occur inside it

module.exports = function(app) {
  
    app.use(function (req, res, next) {
    // create a domain for this request
    var domain = require('domain').create();
    // handle errors in this domain
    domain.on('error', function (err) {
        console.error('DOMAIN ERROR CAUGHT\n', err.stack);
        try {
            // failsafe shutdown in 5 mins
            setTimeout(function () {
                console.error('Failsafe shutdown.');
                process.exit(1);

            }, 5000);

            // disconnect from the cluster

            var worker = require('worker').worker;
            if (worker) {
                worker.disconnect();
            }

            // stop new requests
            server.close();

            try {
                // attempt to use error route
                next(err);
            } catch (err) {
                // if express error route failed try
                // plain node response
                console.error('Express error mechanism failed.\n', err.stack);
                res.statusCode = 500;
                res.setHeader('content-type', 'text/plain');
                res.end('Server error.');
            }
        } catch (err) {
            console.error('Unable to send 500 response.\n', err.stack);

        }
    });

    // add the request and response objects to the domain
    // doing this allows any errors thrown on these objects to be handled by the domain
    domain.add(req);
    domain.add(res);

    //execute the rest of the request chain in the domain
    domain.run(next);
});
    
    
};