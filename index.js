function getFirstSelector(selector){
  
 return document.querySelector(selector);
  
  
  
}



function nestedTarget(){
  
  return document.getElementsByTagName('div')[4];
  
  
  
  
}




function deepestChild(){
  let grandNode = document.getElementById('grand-node');
  
  return grandNode.getElementsByTagName('div')[3];
  
  
}



function increaseRankBy(n){
  
  const lis = document
    .getElementById('app')
    .querySelectorAll('ul.ranked-list li');
    

    for (let i = 0; i < lis.length; i++) {
      
      lis[i].innerHTML = parseInt(lis[i].innerHTML)+ n;
      
      
    }
}







 

