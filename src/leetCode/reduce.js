     
     // leet Code 
     export function reduce(num,fn,init){
        let total = init;
        for(let i = 0; i < num.length; i++) {
            total = fn(total,num[i])
        }
        return total;
     }

     console.log(reduce([1,2,3,4],(acc,curr) => acc + curr,0));