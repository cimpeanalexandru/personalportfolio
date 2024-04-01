/* =============== typing animation =============== */
var typed = new Typed(".typing", {
  strings:["", "Web Developer", "Front-end Developer"],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true
})

/* =============== Aside =============== */
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.lenght;
    for(let i=0; i<totalNavList; i++) {
      const a = navList[i].querySelector("a");
      a.addEventListener("click", function() {
        console.log(this)
      })
    }
