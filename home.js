const headerVideoBg = document.querySelector('[data-video-type="header-bg"]');

const homeProjectCont = document.querySelector(".project__lists");

homeProjectCont.addEventListener("click", (event) => {
    let targetBtn = event.target.closest(".project__info");
    if (!targetBtn) return;
    for (let button of homeProjectCont.querySelectorAll(".project__info")) {
        if (button == targetBtn) continue;
        button.classList.remove("flipped");
        button.parentElement.closest(".card").classList.remove("flipped");
    }

    targetBtn.parentElement.closest(".card").classList.toggle("flipped");
    setTimeout(() => {
        targetBtn.classList.toggle("flipped");
    }, 450);
});

window.addEventListener("load", (event) => {
    let videoBg = localStorage.getItem("videoBg");
    if (videoBg) {
        headerVideoBg.innerHTML = `<video class="bg__video-content" autoplay muted loop playsinline>${videoBg}</video>`;
    }
});

modeToggle.addEventListener("click", (event) => {
    headerVideoBg.style.opacity = 0;
    root.classList.toggle("light");

    let theme = "black";

    let videoBg = `<source src="videos/Full Moon - 6435.mp4" type="video/mp4">
    <source src="videos/Full Moon - 6435.webm" type="video/webm">`;

    if (root.classList.contains("light")) {
        theme = "light";
        videoBg = `<source src="videos/Clouds - 35573.mp4" type="video/mp4">
        <source src="videos/Clouds - 35573.webm" type="video/webm">`;
    }

    setTimeout(() => {
        headerVideoBg.innerHTML = ``;
        headerVideoBg.innerHTML = `<video class="bg__video-content" autoplay muted loop playsinline>${videoBg}</video>`
        // headerVideoBg.innerHTML = `<video class="bg__video-content" autoplay muted loop>${videoBg}</video>`;
        headerVideoBg.style.opacity = 1;
    }, 700);

    localStorage.setItem("theme", theme);
    localStorage.setItem("videoBg", videoBg);
});

window.addEventListener("load", (event) => {
    let videoBg = localStorage.getItem("videoBg");
    if (videoBg) {
        headerVideoBg.innerHTML = `<video class="bg__video-content" autoplay muted loop playsinline>${videoBg}</video>`;
    }
});

console.log(navBar);