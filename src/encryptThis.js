    function encryptThis(word) {
        let arr = word.split('');
        arr[0] = word.charCodeAt(0);

        if(word.length > 2) {
            let temp = arr[1];
            arr[1] = arr[arr.length - 1];
            arr[arr.length - 1] = temp;
        }
        return arr.join("");
    }
    console.log(encryptThis("demo"));