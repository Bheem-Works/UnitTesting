
    export var composition = function (functions)  {
        return function (x) {
            for(const fn of functions.reverse()){
                x = fn(x);
            }
            return x;
        }
    }

    const fn = composition([x => x + 1, x => x * 2]);
    console.log(fn(3)); 