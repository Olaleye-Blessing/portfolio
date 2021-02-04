import { NetworkError } from "./error.js";

import { myDate } from "./date.js";

import { loaderCont } from "./loader.js";

import { graphContainer, graph } from "./graph.js";

const modeToggle = document.querySelector(".mode");

const continentSelect = document.getElementById('continent');

const countrySelect = document.getElementById("country");

const form = document.forms[0];

const resultContainer = document.querySelector('.results');


let numberOfFetchingCountries = 0;

let allCountries;

let currentLoadData;

form.addEventListener('submit', event => {
    event.preventDefault();
})

async function fetchCountryData(url) {
    try {
        let countryRes = await fetch(url);
        let countryData = await countryRes.json();
        return countryData;
    } catch (error) {
        console.warn(error);
    }
}

function populateData(data) {
    resultContainer.innerHTML = '';
    let update = updateCountryData(data);
    resultContainer.append(update);
}

window.addEventListener('load', function (event) {
    if (localStorage.getItem('currentData')) {
        let data = JSON.parse(localStorage.getItem('currentData'));
        populateData(data);
    }
    let loader = document.querySelector('.welcome');
    let ring1 = document.querySelector('.ring_1');
    let ring2 = document.querySelector('.ring_2');
    ring1.classList.add('move_up');
    ring2.classList.add('move_down');
    loader.style.opacity = 0;
    setTimeout(() => {
        loader.remove();
    }, 2100);
})

function disableSelection() {
    continentSelect.disabled = true;
    continentSelect.classList.add('disabled');
    countrySelect.disabled = true;
    countrySelect.classList.add('disabled');
}

function enableSelection() {
    continentSelect.disabled = false;
    continentSelect.classList.remove('disabled');
    countrySelect.disabled = false;
    countrySelect.classList.remove('disabled');
}

continentSelect.addEventListener('change', async function (event) {
    disableSelection();
    resultContainer.innerHTML = '';
    graphContainer.innerHTML = ``;
    // graphContainer.innerHTML = `<header class="graph__header"><p>Percentages are relative to <small>CASES</small></p>
    // <div class="graph__key">
    //     <div class="key-r">recovered</div>
    //     <div class="key-a">active</div>
    //     <div class="key-d">death</div>
    // </div>
    // </header>`;
    let loader = loaderCont();
    form.after(loader);
    let selectedContinent = continentSelect.options[continentSelect.selectedIndex];
    // console.log(selectedContinent);
    let selectedValue = selectedContinent.value;
    let url = new URL('/v3/covid-19/', 'https://disease.sh');

    if (selectedValue == 'All') {
        url = `${url}all`;
    } else {
        selectedValue = encodeURIComponent(selectedValue);
        url = `${url}continents/${selectedValue}?strict=true`;
    }
    // console.log(url);
    
    let continentData = await fetchCountryData(url);
    // console.log(continentData);
    currentLoadData = await continentData;
    let [recovered, active, deaths, cases] = [currentLoadData.recovered,currentLoadData.active, currentLoadData.deaths, currentLoadData.cases];
    // console.log([recovered, cases, deaths, population]);
    // console.log()
    // console.log(currentLoadData);
    // currentLoadData = continentData;
    // console.log(currentLoadData);
    // localStorage.setItem('currentData', JSON.stringify(currentLoadData));
    localStorage.setItem('currentData', JSON.stringify(continentData));
    // resultContainer.innerHTML = '';
    // let update = updateCountryData(continentData);
    // resultContainer.append(update);
    // graph(recovered, cases, deaths, population);
    // populateData(continentData);
    loader.style.opacity = 0;
    setTimeout(() => {
        loader.remove();
        populateData(continentData);
        graphContainer.innerHTML = `<header class="graph__header"><p>Percentages are relative to <small>CASES</small></p>
    <div class="graph__key">
        <div class="key-r">recovered</div>
        <div class="key-a">active</div>
        <div class="key-d">death</div>
    </div>
    </header>`;
        graph(recovered, active, deaths, cases);
        enableSelection();
    }, 2100);
})

countrySelect.addEventListener('change', async function (event) {
    disableSelection();
    resultContainer.innerHTML = '';
    graphContainer.innerHTML = ``;
    // graphContainer.innerHTML = `<header class="graph__header"><p>Percentages are relative to <small>CASES</small></p>
    // <div class="graph__key">
    //     <div class="key-r">recovered</div>
    //     <div class="key-a">active</div>
    //     <div class="key-d">death</div>
    // </div>
    // </header>`;
    let loader = loaderCont();
    form.after(loader);
    let selectedCountry = countrySelect.options[countrySelect.selectedIndex];
    let selectedValue = selectedCountry.value;
    let selectedFlag = selectedCountry.dataset.flag;

    // console.log(selectedValue);
    // selectedValue = 
    if (selectedValue == 'All') {
        selectedValue = `https://disease.sh/v3/covid-19/all`;
    } else {
        selectedValue = `https://disease.sh/v3/covid-19/countries/${selectedValue}?strict=true`;
    }
    // console.log(selectedFlag);
    let countryData = await fetchCountryData(selectedValue);
    
    // console.log(countryData);
    currentLoadData = countryData;
    // localStorage.setItem('currentData', JSON.stringify(currentLoadData));
    let recovered, active, deaths, cases;
    if (!countryData.message) {
        localStorage.setItem('currentData', JSON.stringify(countryData));
        [recovered, active, deaths, cases] = [currentLoadData.recovered,currentLoadData.active, currentLoadData.deaths, currentLoadData.cases];
    }
    // resultContainer.innerHTML = '';
    // let update = updateCountryData(countryData);
    // resultContainer.append(update);
    // populateData(countryData);
    loader.style.opacity = 0;
    setTimeout(() => {
        loader.remove();
        populateData(countryData);
        if (selectedFlag && !countryData.message) {
            // console.log(selectedFlag);
            let flagFigure = document.createElement('figure');
            flagFigure.innerHTML = `<img src="${selectedFlag}" alt="${selectedCountry.text}'s flag">`
            document.querySelector('.result__name').append(flagFigure);
        }
        if (!countryData.message) {
            graphContainer.innerHTML = `<header class="graph__header"><p>Percentages are relative to <small>CASES</small></p>
    <div class="graph__key">
        <div class="key-r">recovered</div>
        <div class="key-a">active</div>
        <div class="key-d">death</div>
    </div>
    </header>`;
            graph(recovered, active, deaths, cases);
        }
        enableSelection();
    }, 2100);
})

function updateCountryData(data) {
     // this function is used for both country and continent
    if (data.message) {
        let notFound = document.createElement('div');
        notFound.innerHTML = `<span class="not">Country not found</span> Or <span class="doesnt">doesn't have any cases</span>`;
        notFound.classList.add('notFound');
        // notFound.textContent = data.message;
        return notFound;
        // console.log('yes');
    }
    
    let countryResult = document.createElement('div');
    countryResult.classList.add('result');
    countryResult.innerHTML = `<header class="result__name">
        <h3>${data.country || data.continent || 'Global'}</h3>
    </header>

    <div class="result__container">
        <div class="result__today"><div>Today's Date</div> <span>${myDate(Date.now())}</span></div>

    <div class="result__updated"><div>Date Updated</div> <span>${myDate(data.updated)}</span></div>

    <div class="result__cases"><div>Cases</div> <span>${data.cases}</span></div>

    <div class="result__recovered"><div>Recovered</div> <span>${data.recovered}</span></div>

    <div class="result__critical"><div>Critical</div> <span>${data.critical}</span></div>
    

    <div class="result__death"><div>Death</div> <span>${data.deaths}</span></div>

    <div class="result__population"><div>Population</div> <span>${data.population}</span></div>

    <div class="result__continent"><div>Continent</div> <span>${data.continent || '____'}</span></div>

    </div>
    `;
    // countrySelect.style.opacity = 1;
    return countryResult;
}

modeToggle.addEventListener("click", (event) => {
    root.classList.toggle("white");

    let theme = "dark";

    if (root.classList.contains("white")) {
        theme = "white";
    }

    localStorage.setItem("theme", theme);
});

async function fetchCountryName() {
    // let allCountries;
    // console.log('feth')
    
    try {
        let countryFecth = await fetch("https://restcountries.eu/rest/v2/all");
        allCountries = await countryFecth.json();
        return allCountries;
    } catch (e) {
        if (e instanceof TypeError) {
            // console.log('yes');
            if (numberOfFetchingCountries >= 4) {
                throw new NetworkError('Network Error!!');
            }
            numberOfFetchingCountries += 1;
            // new Promise
            await fetchCountryName();
        }
    }
    // console.log(allCountries);
}

async function loadCountries() {
    try {
        await fetchCountryName();
        for (let country of allCountries) {
            let countryOption = new Option(country.name, country.alpha3Code);
            // countryOption.setAttribute('title', country.name);
            countryOption.setAttribute('data-flag', country.flag);
            countrySelect.add(countryOption, undefined);
        }
    } catch (e) {
        if (e instanceof NetworkError) {
            // console.warn(e);
            errorMessage();
        }
    }
    
}

loadCountries();

function errorMessage() {
    let errorP = document.createElement('p');
    errorP.classList.add('error_para');
    errorP.innerHTML = `Seems like there's network error! <button class="reload" data-button="reload">Please, reload countries</button>`;
    form.after(errorP);
}

// errorMessage();

document.addEventListener('click', async function (event) {
    let reloadBtn = event.target.closest('.reload');
    if (!reloadBtn) return;
    numberOfFetchingCountries = 0;
    reloadBtn.parentElement.opacity = 0;
    reloadBtn.parentElement.remove();
    console.clear();
    
    setTimeout(() => {
        loadCountries();
    }, 1100);
})

