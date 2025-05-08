import { describe, test, it, expect } from "vitest";
import { alphabetString } from "../src/albhabetString";

describe('albhabetString',()=>{
  it('should return the 1 if there is the albhabet ',()=>{
    expect(alphabetString('a')).toEqual('10000000000000000000000000')
  })
})