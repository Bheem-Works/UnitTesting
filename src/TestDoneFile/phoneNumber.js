
    export function generateNumber(num){
        const first = num.slice(0,3).join('');
        const second = num.slice(3,6).join('');
        const third = num.slice(6,10).join('');

        return `(${first} + ${second} - ${third})`;
    }
    console.log(generateNumber([1,2,3,4,5,6,7,8,9,10]));

