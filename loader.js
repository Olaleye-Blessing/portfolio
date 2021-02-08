const homeLoader = document.querySelector('.home-loader');

window.addEventListener('load', event => {
    homeLoader.style.opacity = 0;
    setTimeout(() => {
        homeLoader.remove();
    }, 2100);
})

// window.addEventListener("load", event => {
//     let videoBg = localStorage.getItem('videoBg');
//     if (videoBg) {
//         headerVideoBg.innerHTML = `<video class="bg__video-content" autoplay muted loop>${videoBg}</video>`;
//     }
// })