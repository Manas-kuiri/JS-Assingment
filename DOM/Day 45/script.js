var btn = document.querySelector('.bottom button')
var outer = document.querySelector('.outer')
var h2 = document.querySelector('.bottom h2')
var h1 = document.querySelector('main h1')
var grow =0
btn.addEventListener('click',function(){
     btn.style.pointerEvents='none'
     var num =50+Math.floor(Math.random()*100)
     let time = setInterval(() => {
          grow++
          h2.innerHTML=grow+'%'
          outer.style.width=grow+'%'
     },num );

     setTimeout(() => {
          clearInterval(time)
          btn.innerHTML='Downloaded'
          btn.style.opacity=0.7
          console.log('Downloaded in',num/10,'Seconds');
          
     },num*100);
})