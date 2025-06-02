    import {test,it,describe,expect} from "vitest";
    import {addTwoPromises} from '../src/leetCode/addTwoPromise';


    // date : june 2; 
    describe('addTwoPromises',()=>{
        it('should return the sum number if it is resolved',async () => {
                const result = await addTwoPromises(Promise.resolve(2), Promise.resolve(2))
            expect(result).toEqual(4);
        })
    })


