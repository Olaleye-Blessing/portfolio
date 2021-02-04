export function questionLoader() {
    let loaderCont = document.createElement('div');
    loaderCont.classList.add('loader__cont');

    loaderCont.innerHTML = `<div class="loader">
    Loading
    </div>`;
    return loaderCont;
}

// <div class="loader__cont">

// </div>