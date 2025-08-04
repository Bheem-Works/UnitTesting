    import {test,it,describe,expect} from "vitest";
    import { findArray } from "../src/findArray";
    import {findFibo} from "../src/leetCode/fibo"; 

// Date : 21 th june;
describe('findArrays',()=>{
  it('should give the array index value by using the seconds arrays ',()=>{
    expect(findArray([1,2,3,4],[1,2])).toEqual([2,3]);
  })
})

// Date : 4rd agust; 
describe('fibojs',()=>{
  it('should return the fibonacci numbers',()=>{
    expect(findFibo(3)).toEqual([0,1,1,2]); 
  })
})