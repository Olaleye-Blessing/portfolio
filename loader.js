const homeLoader = document.querySelector('.home-loader');

window.addEventListener('load', event => {
    homeLoader.style.opacity = 0;
    setTimeout(() => {
        homeLoader.remove();
    }, 2100);
})