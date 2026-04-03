const menuToggle = document.getElementById("menuToggle");
const sideMenu = document.getElementById("sideMenu");
const closeMenu = document.getElementById("closeMenu");
const overlay = document.getElementById("overlay");

// OPEN
menuToggle.addEventListener("click", () => {
    sideMenu.classList.add("active");
    overlay.classList.add("active");
});

// CLOSE
closeMenu.addEventListener("click", () => {
    sideMenu.classList.remove("active");
    overlay.classList.remove("active");
});

// CLOSE ON OVERLAY CLICK
overlay.addEventListener("click", () => {
    sideMenu.classList.remove("active");
    overlay.classList.remove("active");
});

let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide() {
    slides.forEach(slide => slide.classList.remove("active"));
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
}

setInterval(showSlide, 4000); // change every 4 sec