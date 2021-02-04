const root = document.querySelector('html');

if (localStorage.getItem('theme') == 'light') {
    root.classList.add('light');
}