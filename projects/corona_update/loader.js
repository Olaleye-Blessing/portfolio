export function loaderCont() {
    let loader = document.createElement('div');
    loader.classList.add('d-loader');
    loader.innerHTML = `<div class="d-ring">Loading</div>`;
    return loader;
}