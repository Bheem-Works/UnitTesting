import { describe, test, it, expect } from "vitest";
import {recursive} from '../src/recursive';
import {heigth} from '../src/catHeight';

  // recursive
  describe('recursive',()=>{
    it('should return the times of the seconds paramater',()=>{
      expect(recursive(3,5)).toEqual([5,5,5]);
    })
  });

  // heigth
  describe('heigth',()=>{
    it('should return the three decimal value of the heights and 2.5 increment',()=>{
      expect(heigth(0)).toEqual(2000000);
    })
  })
  