export function trimString(str,size) {
    if(str.length<=size) {
        return str;
    } else if(size<=3) {
        return str.slice(str,size) + '...'
    } else {
        return str.slice(0,size-3) + '...';
    }
}

console.log(trimString('nima',2))
console.log(trimString('nima',6))