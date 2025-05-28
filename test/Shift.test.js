    import {test,it,describe,expect} from "vitest";
    import {composition} from '../src/leetCode/fnComposition';
    import {makeSentence} from '../src/makeSentence';


    describe('composition',()=>{
        it('should run from the last index and give the accumlate the value from the last',()=>{
            const fn = composition([x => x + 1, x => x * 2]);
            expect(fn(3)).toEqual(7);
        })
    })


    describe('MakeSentences',()=>{
        it('should ignore the empt space and the between comaa values',()=>{
            expect(makeSentence(['hello', ',','nima'])).toEqual('hello nima.');
        })
    })