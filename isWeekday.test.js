describe('The test for the isWeekday function' , function(){
    it('This function should return true if the string start starts with "M"' , function(){
        assert.equal(true, isWeekday("Monday"));
        assert.equal(true, isWeekday("Tuesday"));
        assert.equal(true, isWeekday("Friday"));
    
    });
    
    it('This function should return false if the day string start starts with "S"' , function(){
        assert.equal(false, isWeekday("Sunday"));

       
    });

});