function decode (str) {
    let storeDeCode = "";
    for(let i = 0; i < str.length;i++) {
        let char = str[i];

        if(char === " ") {
            storeDeCode += " ";
        } else {
            const flipped = 219-char.charCodeAt(0);
            storeDeCode += String.fromCharCode(flipped);
        }
    }
    return storeDeCode;
}


const miso = 'miso';
const misoDecode = 'nrhl';
console.log(decode(misoDecode));