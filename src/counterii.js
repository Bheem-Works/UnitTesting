
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

    // let's do a arrays methods and create a own system;
    const counterInit = counter(3);
    const call = ["increment","decrement","reset"];
    const result = call.map(func => counterInit[func]());
    console.log(result);