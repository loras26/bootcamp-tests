function longestWord(str){//console.log(str)
    //spliting the string at the white space into an array of strings
   var word=str.split(" ")
   //initiate a variable that will hold the length fo the longest word
   var longest=0;
    var result="";
   for(var i=0; i<word.length;i++){ 
     // If strSplit[i].length is greater than the word it is compared with...
      // ...then longestWord takes this new value
     if(word[i].length >= longest){
       longest=word[i].length;
      result=word[i]                            
         }
      }
    return result
  }
  function shortestWord(str){
    var words= str.split(" ")
    var shortest=words[0];
    
    for(var x=0;x<words.length;x++){
      //console.log(words[x])
      if(words[x].length <=shortest.length){
       shortest=words[x]
       
        
      }
    }
    return shortest
  }
  function wordLengths(str){
    var word= ""
    var words =str.split(" ")
    for(var i=0;i<words.length;i++ ){word+=words[i]}
     
     
   return word.length
   }
   