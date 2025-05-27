    import {test,it,describe,expect} from "vitest";
    import {fabinacci} from '../src/fabinocii';
    import {xFabinacci} from '../src/xFabinacii';

    describe('fabinocii',()=>{
        it('should return the fabinocii number ',()=>{
            expect(fabinacci(3)).toEqual([0,1,1]);
        });
    })


    describe('xFabinacci',()=>{
        it('it should return fabinacii numbers according to the numbers',()=>{
            expect(xFabinacci([0,1],10)).toEqual([ 0, 1,  1,  2,  3, 5, 8, 13, 21, 34]);
        })
    })

