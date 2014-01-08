var test = require('tap').test,
    curry = require('../'),
    addTwo = function addTwo (a, b){
        return a + b;
    },
    curriedAdd = curry(addTwo);

test('applies function when all args are supplied', function(t){
    t.plan(1);
    var result = curriedAdd(1,2);

    t.equals(result, 3);
});

test('returns a function when partial args are supplied', function(t){
    t.plan(1);
    var result = curriedAdd(1),
        resultType = typeof result;

    t.equals(resultType, 'function');
});