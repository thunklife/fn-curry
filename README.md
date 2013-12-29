fn-curry
=============

A simple function to curry a function with an arbitrary number of arguments

install
=======

```
npm install fn-curry
```

usage
=====

```
var curry = require('fn-curry'),
	add =curry(function(a,b){
		return a + b;
	});

add(5); //=> [Function]

var add1 = add(1);
add1(5); //=> 6
```

license
=======

MIT