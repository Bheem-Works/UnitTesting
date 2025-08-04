
    // Ten minutes walk : This is the code wars question from the kata 6 

    export function isValidWalk(walk) {
    // if it is eqal to the 10 length then return true if it is not then return the false;
    if(walk.length !== 10) return false;
    
    // declaring the varaibles x and y : the x is define the south and the north and the y define the east and teh west;
    let x = 0, y = 0;
    
    // loop through from the each array value by using the of methods. It directly give the acess to the values;
    for(let directions of walk){
        // condition checking if the value matched then increment and the decrement the value;  
        if(directions === 'n') x++;
        else if(directions === 's') x--;
        else if(directions === 'e') y++;
        else if(directions === 'w') y--;
    } 

    // (Working case : {
    // the direction is eqaul to the n (north) then it should  increment the x and if the direction is equal to the s (south) then it should decrement;
    // examples : n === 'n' 1 , s === 's' -1 > so it becomes the true because it is zero the condition is similiar to the length then it would become the zero. 
    // which is also equal to the value and return the true if the north x value is 3 and the south value is 2 then it is not eqault to so it becomes the false; 
    // })

    return x === 0 && y === 0; // if the x and the y is 0 then it return the true;
    }

    console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])) // true;