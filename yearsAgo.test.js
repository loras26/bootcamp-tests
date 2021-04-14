describe('The test for the yearsAgo function' , function(){
    it('This function takes in a year and returns how many years has past from current year ' , function(){
        assert.equal(0, yearsAgo(2021));
        assert.equal(-4, yearsAgo(2025));
        assert.equal(26, yearsAgo(1995));

        
    });
    
});