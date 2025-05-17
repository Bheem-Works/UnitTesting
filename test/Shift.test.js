    import {test,it,describe,expect} from "vitest";
    import {shiftLeft} from '../src/shiftLeft';

    describe('shiftLeft',()=>{
        it('should return the number according to how many string words are unMatch ',()=>{
            expect(shiftLeft('miso','tiso')).toEqual(2);
        })
    })