let F_memo = {0:1};
let M_memo = {0:0};

 export function F(n){
    if(F_memo[n] !== undefined) return F_memo[n]; // 1
    F_memo[n] = n - M(F(n-1)); // 
    return F_memo[n];
}

 export function M(n){
    if(M_memo[n] !== undefined) return M_memo[n];
    M_memo[n] = n - F(M(n-1));
    return M_memo[n];
}

console.log(F(4));
console.log(M(4));