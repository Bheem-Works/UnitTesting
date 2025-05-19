
    function twoSetEqual (n) {
        const total = (n * (n+1)/2); 
        if(total % 2 !== 0 ) return []; 
        const half = total / 2; // why ? every two set equal to be half value;
        const set1 = [];
        const set2 = [];
        let sum1 = 0;

        for(let i = n; i>=1; i--) {
            if(sum1 + i <= half) { // summ with the previous value. which doens't fit the condition go to the else part. 
                set1.push(i);
                sum1+= i;
            } else {
                set2.push(i);
            }
        }
        return [set1, set2];
    }  

    // console.log(twoSetEqual(8));
    console.log(twoSetEqual(4));