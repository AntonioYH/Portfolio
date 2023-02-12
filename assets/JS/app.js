const button = document.querySelector(".nav__div--bar");
const nav = document.querySelector(".nav__ul");

button.addEventListener("click", () => {
    nav.classList.toggle("nav__ul--shown");
});

nav.addEventListener("click", () => {
    nav.classList.remove("nav__ul--shown");
})