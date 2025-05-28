    export function makeSentence(string){
        let result = [];
        for(let i = 0; i < string.length; i++) {
            if(string[i] === ' ' || string[i] === ',') continue;
            result.push(string[i]);
        }
        return result.join(' ') + '.';
    }
    console.log(makeSentence(['hello', '', 'nima']));