const cards = document.querySelectorAll(".card");
const container = document.querySelector(".card_container")
const root = document.documentElement;


const observer = new IntersectionObserver (entries =>{
    entries.forEach(entry =>{
        entry.target.classList.toggle("shown", entry.isIntersecting)
    })
},{   
 rootMargin:"50px",
 threshold:0.8,
})
cards.forEach(card=>{
    observer.observe(card);
});



