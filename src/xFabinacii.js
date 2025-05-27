
    function xFabinacci(value,n) {
        if(n <= 0) return [];
        if(n <= value.length) return value.splice(0,n);

        let result = [...value];

        while(result.length < n) {
            let sum = 0;
            for(let i = result.length - value.length; i < result.length; i++){
                sum += result[i];
            }
            result.push(sum);
        }
        return result;
    }

    console.log(xFabinacci([0,1],10));