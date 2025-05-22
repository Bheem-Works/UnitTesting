import { describe, test, it, expect } from "vitest";
import {test,it,describe,expect} from "vitest";
import {fill_gaps} from '../src/fill_gaps';
import {counter} from '../src/counterii';

  // fill_gaps
  describe('fill_gaps',()=>{
    it('shold fill the between / middle gaps with the staring and ending matching values',()=>{
      expect(fill_gaps([1,null,null,1])).toEqual([1,1,1,1]);
    })
  })


  describe('counter',()=>{
    it('shoud return the object with the three function increment , decrement and reset and they must work properly ',()=>{
      const counterInit = counter(3);
      const call = ["increment","decrement","reset"];
      const result = call.map(fnc => counterInit[fnc]());
      expect(result).toEqual([4,3,0]);
    })
  })