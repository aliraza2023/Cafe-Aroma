// Swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});

// Menu Open Close
let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("move");
  navbar.classList.toggle("open-menu");

};

// Close Menu On Scroll
window.onscroll = () => {
  menu.classList.remove(".move");
  navbar.classList.remove("open-menu");
};

// ScrollReveal 
const animate = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: '2500',
  delay: '400',
});

animate.reveal(".nav");
animate.reveal(".home-text", { origin: "left" });
animate.reveal(".home-img", { origin: "bottom" });
animate.reveal(".ser-box,.product-box,.team-box,.book-data", { interval: 100 });



