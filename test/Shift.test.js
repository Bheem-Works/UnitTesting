    import {test,it,describe,expect} from "vitest";
    import {addTwoPromises} from '../src/leetCode/addTwoPromise';
    import {memomize} from '../src/leetCode/memoize';
    import {isValidWalk} from '../src/tenMinute';

    // date : june 2; 
    describe('addTwoPromises',()=>{
        it('should return the sum number if it is resolved',async () => {
                const result = await addTwoPromises(Promise.resolve(2), Promise.resolve(2))
            expect(result).toEqual(4);
        })
    })

    // date : june 4; 
    describe('memomize',()=>{
        it('should give the value based on the cache',()=>{
            function sumPre(a,b) {
        return a + b;
    }
    const nextPre = memomize(sumPre);
            expect(nextPre(2,3)).toEqual(5)
        })
    })


    // date : 6th june;

    describe('isValidWalk',()=>{
        it('should return the tru if the answer equal to the 0 if it is not then return the false',()=>{
            expect(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])).toEqual(true);
        })
    })


