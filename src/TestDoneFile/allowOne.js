    export var once = function(fn) {
        let boolean = false;

        return function(...args){
            if(!boolean) {
                boolean = true;
                return fn(...args);
            }else {
                return undefined;
            }
        }
    }

    const value = (a,b,c) => (a + b + c);
    let booleanOnce = once(value);
    console.log(booleanOnce(1,2,3));
    console.log(booleanOnce(1,2,3));
    