var btn = document.querySelectorAll('button');

btn.forEach(function(elms){
      elms.addEventListener('click',function(){
            if(elms.innerText=='Add Friend'){
                  elms.innerText='Remove Friend'
            }
            else{
                  elms.innerText='Add Friend'
            }
      })
      
})