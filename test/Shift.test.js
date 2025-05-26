    import {test,it,describe,expect} from "vitest";
    import {reduce} from '../src/leetCode/reduce'

    //Reduce
    describe('reduce',()=>{
        it('should work like as the reduce methods ',()=>{
            expect(reduce([1,2,3,4,5],(acc,curr) => acc + curr, 0)).toEqual(15);
        });
    })