var btn = document.querySelector('button')
var h1 = document.querySelector('.childs h1')
var a = document.getElementById('team-name')
var b = document.getElementById('team-captain')
var c = document.getElementById('trophi')
var d = document.getElementById('team-fullname')
var main = document.querySelector('main')
var teamDetails = document.getElementById('teamDetails')
var heading = document.querySelector('nav h1')

var teamsData =[
    {
        teamName: "Team Name : RCB",
        teamCaptain:'Captain : Rajat Patidar',
        trophi:'Trophi : 1',
        teamFullName:'Team Full Name : Royal Challengers Bengaluru',
        Primary:'yellow',
        secendary:'red',
    },
      {
        teamName: 'Team Name : CSK',
        teamCaptain:'Captain : Ruturaj Gaikwad ',
        trophi:'Trophi : 5',
        teamFullName:'Team Full Name : Chennai Super King',
        Primary:'blue',
        secendary:'yellow',
    },
      {
        teamName: 'Team Name : MI',
        teamCaptain:'Captain : Hardik Pandya',
        trophi:'Trophi : 5',
        teamFullName:'Team Full Name : Mumbai Indians',
        Primary:'yellow',
        secendary:'blue',
    },
      {
        teamName: 'Team Name : KKR',
        teamCaptain:'Captain : Ajinkya Rahane',
        trophi:'Trophi : 3',
        teamFullName:'Team Full Name : Kolkata Knight Riders ',
        Primary:'#F6D153',
        secendary:'#40285D',
    },
      {
        teamName: 'Team Name : SRH',
        teamCaptain:'Captain : Pat Cummins',
        trophi:'Trophi : 1',
        teamFullName:'Team Full Name : Sunrisers Hyderabad',
        Primary:'#992126',
        secendary:'#E5630F',
    },
      {
        teamName: 'Team Name : RR',
        teamCaptain:'Captain : Sanju Samson',
        trophi:'Trophi : 1',
        teamFullName:'Team Full Name : Rajasthan Royals',
        Primary:'#FFFFFF',
        secendary:'#E70E96',
    },
        {
        teamName: 'Team Name : GT',
        teamCaptain:'Captain : Subhman Gill',
        trophi:'Trophi : 1',
        teamFullName:'Team Full Name : Gujrat Titans',
        Primary:'#E4CB7E',
         secendary:'#253957',
    },  
        {
        teamName: 'Team Name : LSG',
        teamCaptain:'Captain : Rishab Pant',
        trophi:'Trophi : 0',
        teamFullName:'Team Full Name : Lucknow Super Giants',
        Primary:'#01894F',
        secendary:'#B81635',
    },
        {
        teamName: 'Team Name : DC',
        teamCaptain:'Captain : Axar patel',
        trophi:'Trophi : 0',
        teamFullName:'Team Full Name : Delhi Capitals',
        Primary:'#FB1F1C',
        secendary:'#0858F3',
    },
        {
        teamName: 'Team Name : PBKS',
        teamCaptain:'Captain : Shreyas Iyar',
        trophi:'Trophi : 0',
        teamFullName:'Team Full Name : Punjab KingsPrimary',
        Primary:'#F3D6A8',
        secendary:'#DE1929',
    },

]

btn.addEventListener('click',function(){

    var num = teamsData[Math.floor(Math.random()*teamsData.length)]
    h1.innerHTML="The Winner Is"
    a.innerHTML=num.teamName
    b.innerHTML=num.teamCaptain
    c.innerHTML=num.trophi
    d.innerHTML=num.teamFullName
    heading.style.color =num.Primary
    main.style.backgroundColor=num.secendary
   teamDetails.style.backgroundColor=num.Primary
})