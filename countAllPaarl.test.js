describe('The test for the countAllPaarl function' , function(){
    it('This function takes in a comma separated string of registration numbers and returns the number of registration numbers in the string  ' , function(){
        assert.equal(3, countAllPaarl("CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123"));
        assert.equal(2, countAllPaarl("CJ 345 123, CJ 2345, CL 123-546, CK 345"));
        assert.equal(1, countAllPaarl("CJ 345 123, CL 123-546"));

        
    });
    
})