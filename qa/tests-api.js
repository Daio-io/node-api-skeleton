var assert = require('chai').assert;
var http = require('http');
var rest = require('restler');

suite('API tests', function () {

    var baseUrl = 'http://localhost:3000';

    // Basic sample object to use for post and testing get data assertions
    var sample = {
        name: 'Test',
        digits: 25,
        tags: ['test', 'testing', 'tested'],
        boo: true
    };

    setup(function () {
        //TODO: setup tests
    });

    test('should be able to send and add a sample to the API', function (done) {
        rest.post(baseUrl + '/api/sample', {
            data: sample
        }).on('success',
            function (data) {
                rest.get(baseUrl + '/api/sample/' + data.id).on('success', function (data) {
                    assert(data.name === sample.name);
                    assert(data.digits === sample.digits);
                    assert(data.tags.size === sample.tags.size);
                    assert(data.boo === sample.boo);
                    done();
                });
            });
    });


    test('should be able to get sample from API', function (done) {
        rest.post(baseUrl + '/api/sample', {
            data: sample
        }).on('success',
            function (data) {
                assert.match(data.id, /\w/, 'id must be set');
                done();

            });
    });

    teardown(function () {
        //TODO: remove data added to database
    });



});