import { describe, test, it, expect } from "vitest";
import {test,it,describe,expect} from "vitest";
import {who_likes} from '../src/whoLike';


  // who_likes it 

  describe('who_likes',()=>{
    it('should return no one likes if there is empty array. if not then it shoud return the name. If there is more then 3 name it should return more ',()=>{
      expect(who_likes([])).toEqual('No one likes');
    })
  })