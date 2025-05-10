import { describe, test, it, expect } from "vitest";
import { url } from "../src/user_link_generate";

// url 
  describe('urlGenerator',()=>{
    it('should return the url link of the code Wars user',()=>{
      expect(url('vim')).toEqual('http://www.codewars.com/users/vim');
    })
  })