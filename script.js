const nav = document.querySelector(".nav");
const arrow = document.querySelector("#caret-down-icon-wrapper");
const WE = document.querySelector("#WE-content");
const WE_position = WE.offsetTop - 1;
const WE_height = WE.getBoundingClientRect().height;
const line_first = document.querySelector(".big-line-first");
const BJ = document.querySelector("#BJ-content");
const BJ_position = BJ.offsetTop - 1;
const BJ_height = BJ.getBoundingClientRect().height;
const lines_second = document.querySelectorAll(".big-line-second");
const ET = document.querySelector("#ET-content");
const ET_position = ET.offsetTop - 1;
const ET_height = ET.getBoundingClientRect().height;
const line_third = document.querySelector(".big-line-third");
const button_a = document.querySelector(".nav-icons").firstElementChild;
const button_b = button_a.nextElementSibling;
const button_c = button_b.nextElementSibling;
const innerSquare_a =
  document.querySelector(".nav-icons").firstElementChild.children;
const innerSquare_b =
  document.querySelector(".nav-icons").firstElementChild.nextElementSibling
    .children;
const innerSquare_c =
  document.querySelector(".nav-icons").firstElementChild.nextElementSibling
    .nextElementSibling.children;
const navButtons = document.querySelectorAll("a.nav-square");
let counterWE = 1;
let counterBJ = 1;
let counterET = 1;

// arrow-animation
window.onload = function () {
  setTimeout(arrowAnimation, 3000);
};
function arrowAnimation() {
  arrow.classList.add("arrow-animation");
}

// scroll events
window.addEventListener("scroll", function () {
  nav.classList.toggle("active-nav", window.scrollY > WE_position);
  line_first.classList.toggle(
    "active-line-first",
    window.scrollY > WE_position - 0.2 * WE_height
  );
  lines_second.forEach(function (line) {
    line.classList.toggle(
      "active-line-second",
      window.scrollY > BJ_position - 0.2 * BJ_height
    );
  });
  line_third.classList.toggle(
    "active-line-third",
    window.scrollY > ET_position - 0.2 * ET_height
  );
  if (window.scrollY > WE_position && window.scrollY < BJ_position) {
    button_a.classList.add("selected");
    button_b.classList.remove("selected");
    button_c.classList.remove("selected");
    innerSquare_a[0].classList.add("selected-1");
    innerSquare_b[0].classList.remove("selected-1");
    innerSquare_c[0].classList.remove("selected-1");
    const location = window.location.toString().split("#")[0];
    history.replaceState(null, null, location + "#WE-content");
  } else if (window.scrollY > BJ_position && window.scrollY < ET_position) {
    button_a.classList.remove("selected");
    button_b.classList.add("selected");
    button_c.classList.remove("selected");
    innerSquare_a[0].classList.remove("selected-1");
    innerSquare_b[0].classList.add("selected-1");
    innerSquare_c[0].classList.remove("selected-1");
    const location = window.location.toString().split("#")[0];
    history.replaceState(null, null, location + "#BJ-content");
  } else if (window.scrollY > ET_position) {
    button_a.classList.remove("selected");
    button_b.classList.remove("selected");
    button_c.classList.add("selected");
    innerSquare_a[0].classList.remove("selected-1");
    innerSquare_b[0].classList.remove("selected-1");
    innerSquare_c[0].classList.add("selected-1");
    const location = window.location.toString().split("#")[0];
    history.replaceState(null, null, location + "#ET-content");
  } else {
    button_a.classList.remove("selected");
    button_b.classList.remove("selected");
    button_c.classList.remove("selected");
    innerSquare_a[0].classList.remove("selected-1");
    innerSquare_b[0].classList.remove("selected-1");
    innerSquare_c[0].classList.remove("selected-1");
    history.pushState({}, "", "/index.html");
  }
});

// click events
navButtons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    let position = element.offsetTop;
    window.scrollTo({
      left: 0,
      top: position,
    });
    if (element.id == "WE-content") {
      setTimeout(function () {
        counterWE++;
        element.style.border = `${counterWE * 2}px solid #ffffff`;
      });
    }
    if (element.id == "BJ-content") {
      setTimeout(function () {
        counterBJ++;
        element.style.border = `${counterBJ * 2}px solid #ffffff`;
      });
    }
    if (element.id == "ET-content") {
      setTimeout(function () {
        counterET++;
        element.style.border = `${counterET * 2}px solid #ffffff`;
      });
    }
  });
});
