    var counter = function (intialCount) {
            let count = intialCount;
         return {
            increment: function () {
                count++;
                return count;
            },
            decrement:function () {
                count--;
                return count;
            },
            reset:function () {
                count = 0; 
                return count;
            }
         }
    }

    const createCounter = counter(3);
    console.log(createCounter.increment());
    console.log(createCounter.increment());
    console.log(createCounter.decrement());