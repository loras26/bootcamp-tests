describe('The test for the findItemsOver20 function' , function(){
    it('This function should return "Hello, pupu" when i pass the name pupu' , function(){
        assert.deepEqual([
            {"name":'pears', "qty" : 37},
            {"name": 'bananas',"qty" : 27},
        ], findItemsOver20([{"name":"apples","qty":10},{"name":"pears","qty":37},{"name":"bananas","qty":27},{"name":"apples","qty":3}]));

        
    });

});