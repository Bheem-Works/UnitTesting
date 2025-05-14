import { describe, test, it, expect } from "vitest";
import {invertedRanges} from '../src/invertedRanges';

  // invertedRanges
  describe('invertedRanges',()=>{
    it('should return the gap number between the 100 ',()=>{
      expect(invertedRanges([[10,40],[50,70]])).toEqual([
        [ 0, 9 ],
         [ 41, 49 ],
        [ 71, 100 ]
      ]);
    })
  })
