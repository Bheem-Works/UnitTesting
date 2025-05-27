    import {test,it,describe,expect} from "vitest";
    import {fabinacci} from '../src/fabinocii';

    describe('fabinocii',()=>{
        it('should return the fabinocii number ',()=>{
            expect(fabinacci(3)).toEqual([0,1,1]);
        });
    })