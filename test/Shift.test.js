    import {test,it,describe,expect} from "vitest";
    import {addTwoPromises} from '../src/leetCode/addTwoPromise';
    import {memomize} from '../src/leetCode/memoize';
    import {isValidWalk} from '../src/tenMinute';
    import {isRubby} from '../src/CodinMeetUpThree';
    import { sentenceToNumber } from "../src/sentenceCalculator";

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


    // Date : 7th june; 
    describe('rubyValid',()=>{
        it('should return the true if the arrays objects properties language contains ruby ',()=>{
            const arrayValid = [
                {
                    firstName : 'vim',
                    lastName : 'magar',
                    language : 'Ruby',
                }
            ]
            expect(isRubby(arrayValid)).toEqual(true);
        })
    })

 // Date : 18th june; 
describe('sentenceToNumber',()=>{
  it('should give increment the value at once if it is small letter or digit. and twice if it is the capital else return 0',()=>{
    expect(sentenceToNumber("aB3$zZ")).toEqual(86);
  })
})
