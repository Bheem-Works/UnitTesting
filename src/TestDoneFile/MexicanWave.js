    export function wave(str) {
        let result = [];

        for(let i = 0; i<str.length; i++) {
            if(str[i] === ' ') continue;

            const char = str.split(''); 
            char[i] = char[i].toUpperCase();
            result.push(char.join(''));
        }
        return result;
    }

    console.log(wave('miso'));