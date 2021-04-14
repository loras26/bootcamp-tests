describe('The test for the greet function' , function(){
    it('This function should return "Hello, pupu" when i pass the name pupu' , function(){
        assert.equal("Hello, pupu", greet("pupu"));

        //assert.deepEqual([2,2],[2,2]);
    });

});