    // find the is anagram 
    export function anagram(wordA,wordB) {
        let a = wordA.toLowerCase().split('').sort().join('');
        let b = wordB.toLowerCase().split('').sort().join('');

        if(a == b) {
            console.log('true')
            return true;
        } else {
            console.log('false');
            return false;
        }
    }

    console.log(anagram('miso','imso'));