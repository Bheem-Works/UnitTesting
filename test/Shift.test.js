    import {test,it,describe,expect} from "vitest";
    import { findArray } from "../src/findArray";

// Date : 21 th june;
describe('findArrays',()=>{
  it('should give the array index value by using the seconds arrays ',()=>{
    expect(findArray([1,2,3,4],[1,2])).toEqual([2,3]);
  })
})
