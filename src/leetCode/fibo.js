// for the fibonacci sequence; 
export function findFibo(n){
    let fibo = [0,1]; 
    for(let i = 2; i <= n; i++){
        fibo[i] = fibo[i-1] + fibo[i-2]; 
    }
    return fibo;
}

console.log(findFibo(3)); // output : 0,1,1,2