import { describe, test, it, expect } from "vitest";
import { strList } from "../src/max";


describe('strList()', () => {
  it('should be comma seprated numbers into an array',()=>{
    expect(strList('1,2,3,4')).toEqual([1,2,3,4]);
  });

  it('should ignore empty value at the end' , () =>{
    expect(strList('1,2,3,4,,')).toEqual([1,2,3,4]);
  });

  it('should ignore the extra spaces like ,, and empty values' ,() => {
    expect(strList('1,2,3,,4,5')).toEqual([1,2,3,4,5]);
  })
})
