import { describe, test, it, expect } from "vitest";
import {twoSetEqual} from '../src/TwoSetEqualSum';
import {wave} from '../src/MexicanWave';


  describe("twoSetEqual",()=>{
    it('shoud return the equal value to the both set',()=>{
      expect(twoSetEqual(4)).toEqual([[ 4, 1 ], [ 3, 2 ] ]);
    });
  });

  // mexican wave 
  describe('wave',()=>{
    it('should return the upperCase of the next string word as sequnece',()=>{
      expect(wave('vim')).toEqual(['Vim','vIm','viM']);
    })
  })