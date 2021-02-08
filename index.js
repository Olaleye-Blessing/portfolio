// import { allProjects } from "./list_of_projects.js";
const navBar = document.querySelector("header .navbar");

const menu = document.querySelector(".menu-list");

const menuBtn = document.querySelector(".menu-btn");

const cancelBtn = document.querySelector(".close-btn");

const modeToggle = document.querySelector('[data-btn="mode"]');

function removeNavLists() {
    menu.classList.remove("active");
    setTimeout(() => {
        menuBtn.classList.remove("hide");
        menuBtn.classList.remove("opaq");
    }, 300);
}

menuBtn.addEventListener("click", () => {
    menu.classList.add("active");
    menuBtn.classList.add("opaq");
    setTimeout(() => {
        menuBtn.classList.add("hide");
    }, 300);
});

cancelBtn.addEventListener("click", () => {
    removeNavLists();
});

menu.addEventListener("click", (event) => {
    let scrollLink = event.target.closest('a[href^="#"]');
    if (!scrollLink) return;
    removeNavLists();
});

window.addEventListener("scroll", (event) => {
    if (window.pageYOffset > 100) {
        navBar.classList.add("nav-bg");
    } else {
        navBar.classList.remove("nav-bg");
    }
});

