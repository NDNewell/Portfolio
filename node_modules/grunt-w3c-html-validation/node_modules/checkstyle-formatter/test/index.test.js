'use strict';

var test = require('tape'),
    checkstyleFormatter = require('..'),
    cases = [
        require('./fixtures/01')
    ];

test('checkstyle formatter', function(assert) {
    cases.forEach(function(testcase) {
        var actual = checkstyleFormatter(testcase.results).trim(),
            expected = testcase.expected.toString().trim();

        assert.equal(actual, expected, 'should return expected xml');
    });

    assert.end();
});
