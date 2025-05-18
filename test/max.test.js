import { describe, test, it, expect } from "vitest";
import {generateNumber} from '../src/phoneNumber'


  describe('generateNumber',()=>{
    it('should return the correct phone number',()=>{
      expect(generateNumber([1,2,3,4,5,6,7,8,9,10])).toEqual("(123 + 456 - 78910)");
    })
  })

