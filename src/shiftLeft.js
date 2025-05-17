    function shiftLeft(s,t){
        let i = s.length-1;
        let j = t.length-1;
        let currValue = 0;

        while(i >= 0 && j>=0 && s[i] === t[j]){
            currValue++;
            i--;
            j--;
        }
        return (s.length - currValue) + (t.length - currValue);
    }
    console.log(shiftLeft('miso','tiso'));