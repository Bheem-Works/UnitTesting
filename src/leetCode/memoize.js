

    export function memomize(fn) {
        const cache = {};

        return function (...args){
            const key = JSON.stringify(args);
            if(key in cache){
                return cache[key];
            }

            cache[key] = fn(...args);
            return cache[key];
        }
    }

    function sumPre(a,b) {
        return a + b;
    }
    const nextPre = memomize(sumPre);
    console.log(nextPre(3,4));
    console.log(nextPre(3,4));