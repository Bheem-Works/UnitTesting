import { describe, test, it, expect } from "vitest";
import { trimString } from "../src/trimString";
import { decode } from "../src/decodeMessage";
describe('trimString()',()=>{
    it('should return the ... if it less then size',()=>{
      expect(trimString('nima',2)).toEqual('ni...');
    })

    it('should retun the string if the size greater then the string',()=>{
      expect(trimString('nima',6)).toEqual('nima');
    })
})

describe ('decode()',()=>{
  it('should return the name called miso',()=>{
    expect(decode('nrhl')).toEqual('miso');
  })
  it('should return the opposite name if it is decoded',()=>{
    expect(decode('vim')).toEqual('ern')
  })
})