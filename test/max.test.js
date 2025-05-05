import { describe, test, it, expect } from "vitest";
import { strList } from "../src/max";
import { whitespaceNumber } from "../src/WhiteSpace";


describe('strList()', () => {
  it('should be comma seprated numbers into an array',()=>{
    expect(strList('1,2,3,4')).toEqual([1,2,3,4]);
  });
})

describe('whitespaceNumber',() => {
  it('should return correct white space fot the positive number 2 ',()=>{
    expect(whitespaceNumber(2)).toEqual("\t,\t");
  });
  it('should return the correct white space for the negative numer -1',()=>{
    expect(whitespaceNumber(-1)).toEqual("\t\t")
  })
})
