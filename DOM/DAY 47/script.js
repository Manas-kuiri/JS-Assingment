const users = [
  {
    full_name: "Sophia Williams",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    profession: "UX Designer",
    description: "Creative UX designer with 5+ years of experience crafting user-friendly digital experiences.",
    tags: ["Design", "Creativity", "UI/UX", "Figma"]
  },

  {
    full_name: "Liam Anderson",
    image: "https://images.unsplash.com/photo-1765506255227-2feaa9bd58ec?q=80&w=692&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profession: "Software Developer",
    description: "Full-stack developer specializing in modern JavaScript frameworks and backend systems.",
    tags: ["JavaScript", "Node.js", "React", "API"]
  },

  {
    full_name: "Ava Martinez",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4",
    profession: "Digital Marketer",
    description: "Strategic digital marketer helping brands scale through SEO, ads, and content strategy.",
    tags: ["Marketing", "SEO", "Social Media", "Branding"]
  },

  {
    full_name: "Noah Johnson",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    profession: "Photographer",
    description: "Professional photographer specializing in portraits, lifestyle, and travel photography.",
    tags: ["Photography", "Editing", "Creativity", "Travel"]
  },

  {
    full_name: "Emma Brown",
    image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
    profession: "Content Writer",
    description: "Passionate content writer delivering engaging blogs, articles, and branded content.",
    tags: ["Writing", "Blogging", "Content", "Storytelling"]
  }
];

var sum =''
users.forEach(function(elem){
      
      sum =sum+`<div class="card">
                  <img src=${elem.image} alt="">
                  <h2>${elem.full_name}</h2>
                  <h4>${elem.profession}</h4>
                  <p>${elem.description}</p>
            </div>`
      
})

 var main = document.querySelector('main')
 main.innerHTML=sum
 