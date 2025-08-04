    // find the number between like as this example:
    // ex: 3,6 > 3,4,5,6;

    export function numberBetween(n1,n2) {
        let result = []; // for store the result;
        for(let i = n1; i <= n2; i++){
            result.push(i);
        }
        return result;
    }
    console.log(numberBetween(3,6)); // should be [3,4,5,6];