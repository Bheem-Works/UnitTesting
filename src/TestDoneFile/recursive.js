export function recursive(times,number){
    let result = [];
    if(times<=0) return result;
    result.push(number);
    result = result.concat(recursive(times-1,number));
    return result;
}

console.log(recursive(3,5));
