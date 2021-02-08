modeToggle.addEventListener("click", (event) => {
    // headerVideoBg.style.opacity = 0;
    root.classList.toggle("light");

    let theme = "black";

    let videoBg = `<source src="videos/Full Moon - 6435.mp4" type="video/mp4">
    <source src="videos/Full Moon - 6435.webm" type="video/webm">`;

    if (root.classList.contains("light")) {
        theme = "light";
        videoBg = `<source src="videos/Clouds - 35573.mp4" type="video/mp4">
        <source src="videos/Clouds - 35573.webm" type="video/webm">`;
    }

    // setTimeout(() => {
        // headerVideoBg.innerHTML = `<video class="bg__video-content" autoplay muted loop>${videoBg}</video>`;
        // headerVideoBg.style.opacity = 1;
    // }, 700);

    localStorage.setItem("theme", theme);
    localStorage.setItem("videoBg", videoBg);
});
