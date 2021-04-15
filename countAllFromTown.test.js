describe('The test for the countAllFromTown function' , function(){
    it('This function takes in a car registration number separated by a comma and the string start the returns the number of registration numbers that start with the start string ' , function(){
        assert.equal(3, countAllFromTown("CL 124,CY 567,CL 345, CJ 456,CL 341,'CL'"));
        //assert.equal("Paarl", countAllFromTown("CJ"));
        //assert.equal("Cape Town", countAllFromTown("CA"));

        
    });
    
})