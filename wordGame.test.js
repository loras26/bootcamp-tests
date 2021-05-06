describe('The test for the wordGame function' , function(){
    it('This function should return the longest word in the string passed to it' , function(){
        assert.equal("shipyard", longestWord("The dog jumped over the shipyard fences"));
        
    });
    it('This function should return the shortest word in the string passed to it' , function(){
        assert.equal("the", shortestWord("The dog jumped over the shipyard fences"));
        
    });
    it('This function should return the total length of the characters in a string passed to it.' , function(){
        
        assert.equal("32", wordLengths("The dog jumped over the shipyard fence"));

        
    });
    
})