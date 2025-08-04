    function makeSentence(str) {
        let result = [];
        for(let i = 0; i < str.length; i++) {
            let words = str[i];

            if(words === ',') {
                if(result.length > 0 ) {
                    result[result.length - 1] += ',';
                }
            } else if(words === '.' || words === '..' || words === '...') {
                continue;
            } else {
                result.push(words);
            }
        }
        let sentence = result.join(' ') + '.';
        return sentence;
    }
