
 export function creditCard(credit){

        const noSpaceNumber = credit.replace(/\s+/g,'');
        const arrayDigit = noSpaceNumber.split('').map(Number);

        let sum = 0;

        for(let i = arrayDigit.length -1 ; i>=0; i--) {
            let digit = arrayDigit[i];

            if((arrayDigit.length - 1 - i) % 2 === 1) {
                digit = digit * 2;

                if(digit > 9) {
                    digit = digit - 9;
                }
            }

            sum += digit; 
        }
        return sum % 10 === 0;
    }

    console.log(creditCard("5457 6238 9823 4311")); // ✅ true
    console.log(creditCard("5457 6238 9323 4311")); // ❌ false

