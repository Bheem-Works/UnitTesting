import { describe, test, it, expect } from "vitest";
import {generateNumber} from '../src/phoneNumber'
import {twoSetEqual} from '../src/TwoSetEqualSum';

  describe('generateNumber',()=>{
    it('should return the correct phone number',()=>{
      expect(generateNumber([1,2,3,4,5,6,7,8,9,10])).toEqual("(123 + 456 - 78910)");
    })
  })

  describe("twoSetEqual",()=>{
    it('shoud return the equal value to the both set',()=>{
      expect(twoSetEqual(4)).toEqual([[ 4, 1 ], [ 3, 2 ] ]);
    });
  });

