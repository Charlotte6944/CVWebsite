// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Make Mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const navEl = document.querySelector(".nav");
const aEl = document.querySelector("ul");

btnNavEl.addEventListener("click", function () {
  navEl.classList.toggle("nav-open");
  console.log("hello");
});

aEl.addEventListener("click", function () {
  navEl.classList.toggle("nav-open");
})

// Navbar scrolling

window.addEventListener("scroll", function(e) {
  console.log("scroll");
})

window.onscroll = function() {
  if (document.documentElement.scrollTop > window.innerHeight) {
    document.getElementById("header-id").style.background = "rgba(255,255,255,0.9)";
  }
  else {
    document.getElementById("header-id").style.background = "rgba(32, 25, 17, 0.5)";
  }
}

// Set my age
const myAgeEl = document.querySelector(".age");
myAgeEl.textContent = currentYear - 1989;
