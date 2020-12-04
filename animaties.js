document.querySelector(".animeer-knop").addEventListener("click", (e) => {
  document.querySelector(".vlakje").classList.toggle("vlakje__naar-rechts");
});

setTimeout(() => {
  document.querySelector(".vlakje").classList.toggle("vlakje__naar-rechts");
}, 2000);

const menuKnop = document.querySelector(".nav__knop");
const navigatieItems = document.querySelectorAll(".nav__link");
menuKnop.addEventListener("click", () => {
  navigatieItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.toggle("nav__link--schuif-in");
    }, 30 * index);
  });
});
