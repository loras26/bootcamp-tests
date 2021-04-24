describe('The test for the countRegNumber function' , function(){
    it('This function should return  the number of registration numbers passed to it' , function(){
        assert.equal(3, countRegNumber("CJ 123 456, CJ 123 456, CJ 123 456"));
        assert.equal(2, countRegNumber("CJ 123 456, CJ 123 456"));
        assert.equal(1, countRegNumber("CJ 123 456"));
        

        
    });
   

});