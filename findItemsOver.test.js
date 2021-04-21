describe('The test for the findItemsOver function' , function(){
    it('This function should return al the objects with qty over 20' , function(){
        assert.deepEqual([{"name":'pears',"qty":37},
        {"name":'bananas',"qty":27},{"name":"apples","qty":40},{"name":"apples","qty":37} ]
            
        , findItemsOver([{"name":"apples","qty":10},
        {"name":"pears","qty":37},
        {"name":"bananas","qty":27},
        {"name":"apples","qty":3},
        {"name":"apples","qty":10},
        {"name":"pears","qty":19},
        {"name":"bananas","qty":17},
        {"name":"apples","qty":3},
        {"name":"apples","qty":40},
        {"name":"pears","qty":20},
        {"name":"bananas","qty":23},
        {"name":"apples","qty":37},]));

       
    });

});