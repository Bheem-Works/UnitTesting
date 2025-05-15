import { describe, test, it, expect } from "vitest";
import {creditCard} from '../src/CreditCardChecker';

  // credit Card Checker

  describe('creditCard',()=>{
    it('should return the true if the number is vlaid accordig to the luh  ',()=>{
      expect(creditCard("5457 6238 9823 4311")).toEqual(true);
    })
  })

