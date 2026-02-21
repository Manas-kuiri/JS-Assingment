var main = document.querySelector('main')
var btn = document.querySelector('button')

var data =['HI,I am Manas','I am in college 2nd year','I am a BCA student','Development is my love','Google ,dream','I am best for myself','Love you']

btn.addEventListener('click',()=>{

      var h1 = document.createElement('h1')
      var x =Math.random()*100
      var y = Math.random()*100
      var rot = Math.random()*360
      var scale = Math.random()*3
      var num =Math.floor( Math.random()*data.length)

      h1.innerHTML=data[num]
      h1.style.position='absolute'
      h1.style.top=x+'%'
      h1.style.left=y+'%'
      h1.style.rotate=rot+'deg'
      h1.style.scale=scale
      
      main.appendChild(h1)
      
})