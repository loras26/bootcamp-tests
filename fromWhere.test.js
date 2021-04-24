describe('The test for the fromWhere function' , function(){
    it('This function takes in a car registration number and return the town it belongs to  ' , function(){
        assert.equal("Bellville", fromWhere("CY"));
        assert.equal("Paarl", fromWhere("CJ"));
        assert.equal("Cape Town", fromWhere("CA"));
        assert.equal("Some other place!", fromWhere("MP"));

        
    });
    
})