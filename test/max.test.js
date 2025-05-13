import { describe, test, it, expect } from "vitest";
import {anagram} from '../src/isAnagram';

  // isAnagram 
  describe('anagram',()=>{
    it('should return the true if the first argument letter match with the second',()=>{
      expect(anagram('miso','imso')).toEqual(true);
    })
  })  