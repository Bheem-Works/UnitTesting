// Sentence calculator by js codewars problems; 

export function sentenceToNumber(s){
let total = 0;

  for(let i = 0; i < s.length; i++){
    const char = s[i];

    if(/[a-z]/.test(char)){
      total += char.charCodeAt(0) - 96;
    } else if(/[A-Z]/.test(char)){
      total += (char.charCodeAt(0) - 64) * 2; 
    } else if(/[0-9]/.test(char)){
      total += parseInt(char);
    } else {
      total += 0; 
    }
  }
  return total; 
}

console.log(sentenceToNumber("12abAh"));
