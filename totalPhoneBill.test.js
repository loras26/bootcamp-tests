describe('The test for the totalPhoneBill function' , function(){
    it('This function takes in a comma separated string of calls made and smss sent and it should return the total phone bill' , function(){
        assert.equal("R2.75", totalPhoneBill("l"));
        assert.equal("R0.65", totalPhoneBill("m"));
        assert.equal("R0.00",totalPhoneBill("g"));
        assert.equal("R7.45", totalPhoneBill("call, sms, call, sms, sms"));

        
    });
    
})