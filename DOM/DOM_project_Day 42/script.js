var h2=document.querySelector('h2');
var btn1=document.getElementById('incre');
var btn2=document.getElementById('decres');
var btn3=document.getElementById('reset');

var a=0;

btn1.addEventListener('click',function(){
      a++;
      h2.innerHTML=a;
})

btn2.addEventListener('click',function(){
      a--;
      h2.innerHTML=a;
})

btn3.addEventListener('click',function(){
      a=0;
      h2.innerHTML=a;
})
