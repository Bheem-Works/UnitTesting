import { describe, test, it, expect } from "vitest";
import { url } from "../src/user_link_generate";
import { come_after } from "../src/WhatComeAfter";
// url 
  describe('urlGenerator',()=>{
    it('should return the url link of the code Wars user',()=>{
      expect(url('vim')).toEqual('http://www.codewars.com/users/vim');
    })
  })


  // comeAfter 
  describe('come_after',()=>{
    it('should return the next letter of aming  the i which next letter  n',()=>{
      expect(come_after('aming','i')).toEqual('n');
  })
  })

