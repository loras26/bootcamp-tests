describe('regCheck function' , function(){
    it('This function should return true if the reg number ends with its location string"' , function(){
        assert.equal(true, regCheck("DV 23 NB GP", "GP"));
        assert.equal(false, regCheck("DV 23 NB MP", "L"));

        
    });
    
});
