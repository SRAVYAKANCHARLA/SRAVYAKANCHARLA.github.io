// This file tests our application code - open this file in a browser to see the test results. 

// It uses QUnit, a unit testing library for JavaScript. 

// Unit testing is a common, professional practice. 

// It helps us verify our code is correct in all cases.

// To complete this assignment, go to the end of this file, and uncomment the last 5 tests. 

// Refresh.  You will see several failing tests. 

// Modify the code in your appplication (W03.js) to get these tests to pass. 

// References: 
// https://qunitjs.com/
// https://www.sitepoint.com/getting-started-qunit/
// http://jsbin.com/tusuvixi/1/edit?html,js,output

QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 == "1", "1=1 success!");
});

QUnit.test("Testing my Calculating Degrees function", function (assert) {
    assert.ok(App.calculateValue(10,10,10,15) == "90", "It should return 90");
    assert.ok(App.calculateValue(10,10,10,15) != "89","The value given is not correct");
    assert.ok(function(){App.calculateValue(sra,10,15,25);  }, 'String is not taken as input');
    assert.throws(App.calculateValue(5,4,-12,5)=="176.63353933657018" ,  'Not given any value');
    assert.throws(function () { App.calculateValue([]); },new Error('The given argument is not a number'), 'Passing in array correctly raises an Error');
});