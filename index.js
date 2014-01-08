var slice = Array.prototype.slice;
module.exports = function(fn, fnLength) {
    fnLength = fnLength || fn.length;

    return function makeCurry (){
        var args = slice.call(arguments);
        if(args.length === fnLength) return fn.apply(this, args);
        return function(){
            var newArgs = slice.call(arguments);
            return makeCurry.apply(this, args.concat(newArgs));
        }
    }
}