const root = document.querySelector('html');

const currentTheme = localStorage.getItem("theme");

if (currentTheme == 'white') {
    root.classList.add('white');
}