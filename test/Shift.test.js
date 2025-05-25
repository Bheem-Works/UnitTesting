    import {test,it,describe,expect} from "vitest";
    import {encryptThis} from '../src/encryptThis'

    describe('encryptThis',()=>{
        it('should retunr the first index char code ascii and swap the value of the second and the last index',()=>{
            expect(encryptThis("dummy")).toEqual("100ymmu");
        })
    })
    