    export function fill_gaps (timeSheet) {
        let result = [];
        for(let i = 0; i < timeSheet.length; i++) {
            result[i] = timeSheet[i];
        }

        for(let i = 0; i < timeSheet.length; i++) {
            if(timeSheet[i] !== null) {
                let startValue = timeSheet[i];
                let j = i + 1;
                while(j < timeSheet.length && timeSheet[j] === null) {
                    j++;
                }

                if(j < timeSheet.length && timeSheet[j] === startValue){
                    for(let k = i + 1; k < j ; k++ ) {
                        result[k] = startValue;
                    }
                }
                i = j - 1;
            }
        }
        return result;
    }

    console.log(fill_gaps([1,null,null,3,2,null,4]));