    export function makeSentence(string){
        let result = [];
        for(let i = 0; i < string.length; i++) {
            let words = string[i];

            if(words === ',') {
                if(result.length > 0) {
                    result[result.length - 1] += ',';
                }                
            }
            else if(words === '.'  || words === '.' || words === '...')  {
                continue;

            } else {
                result.push(words)
            }
        }
        let sentences = result.join(' ').replace(/\.*$/, "") + '.';
        return sentences;
        
    }
    console.log(makeSentence(['hello', ',' ,'nima']));
console.log(makeSentence(['hello', ',', 'my', 'dear']));         // "hello, my dear."
console.log(makeSentence(['hello', 'world']))                   // "hello world."
console.log(makeSentence(['hello', 'world', '.', '.', '..']))   // "hello world."
console.log(makeSentence(['yo', ',', 'fam', ',', 'how', 'you', 'doing', '...'])) // "yo, fam, how you doing."
