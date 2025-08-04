


    // by using the some methods;
    export const rubyValid = (list) => list.some(t => t.language === 'Ruby');

    // by using the foor loops methods; 
    export function isRubby (rubyList) {
        if(rubyList.length === 0) return false; // return false if the arrays is empty or array is zero;
        for(let i = 0; i < rubyList.length; i++){
            const value = Object.values(rubyList[i]);  // Object.Values() is used to conver teh objects to the arrays 

            for(let j = 0; j < value.length; j++) { // after convertig the objects to the arrays we go loops through from it. 
                // if we have not used the Objec.values() then we have to use the .langauge || The object proporties value;
                if(value[j] === 'Ruby'){
                    return true;
                }
            }
        }
        return false;
    }

    const arrayOne = [
    {
        firstName:"vim",
        lastName:"magar",
        adress:"ithari",
        language:"Ruby"
    },
    {
        
        firstName:"vim",
        lastName:"magar",
        adress:"ithari",
        language:"Ruby"
    }
    ]

    console.log(rubyValid(arrayOne));