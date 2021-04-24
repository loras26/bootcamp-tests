function findItemsOver20(itemList){
    var result=[];
    for(var i=0;i<itemList.length;i++){
    var items= itemList[i]
      if(items.qty > 20){result.push(items)}
    }
    return result;
   }