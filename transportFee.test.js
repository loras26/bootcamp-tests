describe('The test for the transportFee function' , function(){
    it('This function should take in a shift type then return the transport cost  ' , function(){
        assert.equal("R20", transportFee("morning"));
        assert.equal("R10", transportFee("afternoon"));
        assert.equal("free", transportFee("nightshift"));

        
    });
    
})