    function invertedRanges (range) {
        let result = [];
        let current = 0;

        for(let i = 0; i < range.length; i++) {
            const [start,end] = range[i];

            if(start > current) {
                result.push([current,start-1]);
            }
            
            current = end + 1;
        }
        if(current <= 100) {
            result.push([current,100]);
        }
        return result;
    }

    console.log(invertedRanges([[20,50],[60,78]]));