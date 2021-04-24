describe('The test for the wordGame function' , function(){
    it('This function takes in a comma separated string of calls made and smss sent and it should return the total phone bill' , function(){
        assert.equal("shipyard", longestWord("The dog jumped over the shipyard fences"));
        assert.equal("the", shortestWord("The dog jumped over the shipyard fences"));
        assert.equal("32", wordLengths("The dog jumped over the shipyard fence"));

        
    });
    
})