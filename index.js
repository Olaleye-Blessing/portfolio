const navBar = document.querySelector('header .navbar');

const menu = document.querySelector(".menu-list");

const menuBtn = document.querySelector(".menu-btn");

const cancelBtn = document.querySelector(".close-btn");

const modeToggle = document.querySelector('[data-btn="mode"]');

const headerVideoBg = document.querySelector('[data-video-type="header-bg"]');

console.log(headerVideoBg);

menuBtn.addEventListener("click", () => {
    menu.classList.add("active");
    menuBtn.classList.add("opaq");
    setTimeout(() => {
        menuBtn.classList.add("hide");
    }, 300);
});

cancelBtn.addEventListener("click", () => {
    menu.classList.remove("active");
    setTimeout(() => {
        menuBtn.classList.remove("hide");
        menuBtn.classList.remove("opaq");
    }, 300);
});

modeToggle.addEventListener("click", (event) => {
    headerVideoBg.style.opacity = 0;
    root.classList.toggle("light");
    
    let theme = 'black';

    let videoBg = `<source src="videos/Full Moon - 6435.mp4" type="video/mp4">
    <source src="videos/Full Moon - 6435.webm" type="video/webm">`;

    if (root.classList.contains('light')) {
        theme = "light";
        videoBg = `<source src="videos/Clouds - 35573.mp4" type="video/mp4">
        <source src="videos/Clouds - 35573.webm" type="video/webm">`
    }

    setTimeout(() => {
        headerVideoBg.innerHTML = `<video class="bg__video-content" autoplay muted loop>${videoBg}</video>`;
        headerVideoBg.style.opacity = 1;
    }, 700);

    localStorage.setItem("theme", theme);
    localStorage.setItem("videoBg", videoBg);
});

window.addEventListener('scroll', event => {
    if (window.pageYOffset > 100) {
        navBar.classList.add('nav-bg');
    } else {
        navBar.classList.remove('nav-bg');
    }
})

window.addEventListener("load", event => {
    let videoBg = localStorage.getItem('videoBg');
    if (videoBg) {
        headerVideoBg.innerHTML = `<video class="bg__video-content" autoplay muted loop>${videoBg}</video>`;
    }
})