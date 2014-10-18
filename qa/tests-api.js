var assert = require('chai').assert;
var http = require('http');
var rest = require('restler');

suite('API tests', function () {

    var baseUrl = 'http://localhost:3000';

    // Sample is a clone of the models sample to mock our mongoose object
    var sample = {
        name: 'Test',
        digits: 25,
        tags: ['test', 'testing', 'tested'],
        boo: true
    };

    test('should be able to send and ad a sample to the API', function (done) {
        rest.post(baseUrl + '/api/sample', {
            data: sample
        }).on('success',
            function (data) {
                rest.get(baseUrl + '/api/sample/' + data.id).on('success', function () {
                    assert(data.name === sample.name);
                    assert(data.digits == sample.digits);
                });
            });
    });


    test('should be able to get sample from API', function (done) {
        rest.post(baseUrl + ' / api / sample ', {
            data: sample
        }).on('success',
            function (data) {
                assert.match(data.id, /\w/, 'id must be set');
                done();

            });
    });



});