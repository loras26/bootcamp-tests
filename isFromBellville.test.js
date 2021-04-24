describe('unit test for isFromBellville function' , function(){
    it('This function should return false if the string start does not start with "CY"' , function(){
        assert.equal(false, isFromBellville("CJ 123 456"));
        assert.equal(true, isFromBellville("CY 123 456"));
    
    });
    

});
