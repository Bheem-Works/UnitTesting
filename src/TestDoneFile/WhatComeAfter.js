export function come_after (str,l) {
    let result = '';
    for(let i = 0; i < str.length ; i++) {
        if(str[i].toLowerCase() === l.toLowerCase()) {
            const nextChar = str[i + 1];

            if(/[a-zA-Z]/.test(nextChar)){
                result += nextChar;
            }
        }
    }
    return result;
}

console.log(come_after('aming','i'));


// next methods 

function whatAfter(string, letter) {
    let storeResult = '';
    for (let i = 0; i < string.length - 1; i++) {
        if (string[i].toLowerCase() === letter.toLowerCase()) {
            if (/[a-zA-Z]/.test(string[i + 1])) {
                storeResult = string[i + 1];
            }
        }
    }
    return storeResult;
}

console.log(whatAfter('vim', 'i')); // Output: m
