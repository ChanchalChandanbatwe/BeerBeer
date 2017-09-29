/**
 * Created by Chanchal on 29 sep 2017
 * Description: Tests cases
 */

var should = require('should');
var assert = require('assert');

describe('Test Framework', function () {
    it('it should have mocha installed and running', function () {
        assert.equal(true, true);
    });
    it('should have the library installed and running for fluent test', function () {
        true.should.eql(true);
    });
});