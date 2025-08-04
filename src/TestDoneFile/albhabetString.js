 export function alphabetString(input) {
    // to handle insesntivity
    input = input.toLowerCase();
    let output = '';  // this will the store the result of the - 0 and the 1 


    // loops from the remaining 26 letters; 
    for(let i = 0; i < 26; i++) {
        // converting the index numbers to the string by using the ascii;
        const char = String.fromCharCode(97 + i);

        // Check if the character is present in the input string
        if(input.includes(char)){
            output += '1'; // if the letter is found then 1 ; 
        } else {
            output += '0'; // if the letter is not found then 0; 
        }
    }
    return output;
}


// console.log(alphabetString("&%#*"));           // Output: "00000000000000000000000000"
console.log(alphabetString("a"));
