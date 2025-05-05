export function whitespaceNumber(n) {
    const sign = n>= 0 ? '' : '\t';
    if(n===0) return '\n';
    const binary = Math.abs(n).toString(2);
    const encodeBits = binary.split('').map(bit => bit === 0 ? '' : '\t');
    return sign + encodeBits;
}

console.log(JSON.stringify(whitespaceNumber(2)));     
console.log(JSON.stringify(whitespaceNumber(-1)));     
