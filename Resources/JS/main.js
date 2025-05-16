
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar ul li");

function setActiveNav() {
  let current = "";
  sections.forEach(section => {
  const sectionTop = section.offsetTop - 120; 
  const sectionHeight = section.offsetHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(li => {
    li.classList.remove("active_nav");
    const link = li.querySelector("a");
    if (link.getAttribute("href") === "#" + current) {
      li.classList.add("active_nav");
    }
  });
}

 
window.addEventListener("scroll", setActiveNav);

  
navLinks.forEach(item => {
  item.addEventListener("click", function () {
    navLinks.forEach(li => li.classList.remove('active_nav'));
    this.classList.add('active_nav');
  });
});

