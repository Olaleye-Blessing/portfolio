import { NetworkError } from "../corona_update/error.js";

import { todayResult, resultFollowingDays, todayDiv, searchedTdayDiv} from "./divContainers.js";


const pageLoader = document.querySelector('[data-loader="page"]');

// window.addEventListener('load', event => {
//     // console.log(pageLoader);
//     pageLoader.style.opacity = 0;
//     setTimeout(() => {
//         pageLoader.remove();
//     }, 1100);
// })

const videoCont = document.querySelector('.bg__video');

const historyContainer = document.querySelector('.history__lists');

const historyBtn = document.querySelector('.history__btn');

const closeHistoryBtn = document.querySelector('.history__close');

historyBtn.addEventListener('click', event => {
    historyContainer.classList.add('listshow');

    let buttons = historyContainer.querySelectorAll('button');

    buttons.forEach(button => {
        button.tabIndex = 0;
    })

    historyBtn.classList.add('disabled');
})

closeHistoryBtn.addEventListener('click', event => {
    historyContainer.classList.remove('listshow');

    let buttons = historyContainer.querySelectorAll('button');

    buttons.forEach(button => {
        button.tabIndex = -1;
    })

    historyBtn.classList.remove('disabled');
})

const form = document.forms[0];

const searchInput = document.getElementById('search');

const resultCont = document.querySelector('.result');

let userHistoryLists = [];

function emptyHistoryContent() {
    let emptyListPara = document.createElement('p');
    emptyListPara.textContent = `History is empty`;
    closeHistoryBtn.after(emptyListPara);
}

historyContainer.addEventListener('click', event => {
    let targetClose = event.target.closest(`[data-btnType="delete"]`)
    if (!targetClose) {
        return;
    }
    let listContent = targetClose.previousElementSibling.textContent;

    userHistoryLists = userHistoryLists.filter(content => content != listContent);

    localStorage.setItem("searched", JSON.stringify(userHistoryLists));
    // if (userHistoryLists == 0) {
    //     emptyHistoryContent();
    // }
    let parentList = targetClose.parentElement;
    
    parentList.classList.add('remove-list');
    setTimeout(() => {
        parentList.remove();
        // if (!closeHistoryBtn.nextElementSibling) {
        //     emptyHistoryContent();
        // }
        // if (userHistoryLists.length == 0) {
        //     emptyHistoryContent();
        // }
    }, 2100);
    if (userHistoryLists.length == 0) {
        setTimeout(() => {
            emptyHistoryContent();
        }, 2100);
    }
})

function createHistoryListCont(input) {
    let li = document.createElement('li');
    li.innerHTML = `<button tabindex="-1" data-btnType="location">${input}</button><button aria-label="delete list" tabindex="-1" class="history__delete" data-btnType="delete"></button>`
    return li;
}

// create loading indicator when a city/country is searched
function createLoader() {
    let div = document.createElement('div');
    div.classList.add('cssload-container');
    div.innerHTML = `<div class="cssload-item cssload-moon"></div>`;
    return div;
}

// show a message when result is not found
function notFoundDiv(message) {
    let cont = document.createElement('span');
    cont.classList.add('notFound');
    cont.innerHTML = message;
    form.append(cont);
    setTimeout(() => {
        cont.style.opacity = 0;
        setTimeout(() => {
            cont.remove();
        }, 1000);
    }, 5000);
}

// disable form elements when searching is going on
function disableFormElements() {
    for (let i = 0; i < form.elements.length; i++) {
        form.elements[i].classList.add('disabled');
        form.elements[i].disabled = true;
    }
}

// enable form elements when searching is completed
function enableFormElements() {
    for (let i = 0; i < form.elements.length; i++) {
        form.elements[i].classList.remove('disabled');
        form.elements[i].disabled = false;
    }
}

// change video background based on weather condition
// -- Firefox has an issue 
function changeBgVideo(src) {
    videoCont.innerHTML = ``;
    videoCont.innerHTML = `<video class="bg__video-content" autoplay muted loop>
    <source src="../videos/weather/${src}.mp4" type="video/mp4">
    <source src="../videos/weather/${src}.webm" type="video/webm">
    </video>`
}

// set video background based on weather condition
function getVideoWeatherCond(description) {
    let newDescription = description.toLowerCase();
    switch (newDescription) {
        case 'sunny':
            changeBgVideo('Beach - 8010'); 
            break;

        case 'clouds':
            changeBgVideo('Cloud - 9153'); 
            break;

        case 'haze':
            changeBgVideo('Sunset - 34623'); 
            break;

        case 'mist':
            changeBgVideo('Mist - 935'); 
            break;

        case 'fog':
            changeBgVideo('Trees - 56476'); 
            break;

        case 'rain':
            changeBgVideo('Rain - 26369'); 
            break;

        case 'snow':
            changeBgVideo('Snowfall - 2362'); 
            break;

        case 'drizzle':
            changeBgVideo('Drizzle - 14496'); 
            break;

        default:
            changeBgVideo('Fall - 23881');
    }
}

// return a nicely formatted date 
function myDate(milliseconds) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    let dateObj = new Date(milliseconds);
    
    let day = days[dateObj.getDay()];
    let date = dateObj.getDate();
    let month = months[dateObj.getMonth()]
    let hours = dateObj.getHours();
    let mins = dateObj.getMinutes();
    let secs = dateObj.getSeconds();

    if (hours < 10) {
        hours = `0${hours}`;
    }

    if (mins < 10) {
        mins = `0${mins}`;
    }

    if (secs < 10) {
        secs = `0${secs}`;
    }
    
    return [day, `${date} ${month}`, `${hours}:${mins}:${secs}`];
}

// I think I created two divs because I got error in the short circuit OR operator

// div for other days result(user)
function createDiv(detail) {
    let div = document.createElement('div');
    div.classList.add('result__container');
    div.innerHTML = `<div class="result__day">
    <p>${ myDate((detail.dt * 1000))[0] }</p></div>
    <figure><img src="https://openweathermap.org/img/wn/${detail.weather[0].icon}@2x.png" alt=""></figure>
    <p>${detail.temp.day || detail.main.temp}<sup>o</sup>C</p>
    <p>${detail.temp.max || detail.main.temp}<sup>o</sup></p>`
    return div;
}

// div for other days result(searched result)
function createDiv_search(detail) {
    let div = document.createElement('div');
    div.classList.add('result__container');
    div.innerHTML = `<div class="result__day">
    <p>${ myDate((detail.dt * 1000))[0] }</p></div>
    <figure><img src="https://openweathermap.org/img/wn/${detail.weather[0].icon}@2x.png" alt=""></figure>
    <p>${detail.main.temp}<sup>o</sup>C</p>
    <p>${detail.main.feels_like}<sup>o</sup></p>`
    return div;
}

// form.addEventListener('submit', fetchWeather);


// const clientFetchUrls = ['https://api.ipgeolocation.io/ipgeo?apiKey=b27ecf90eaf747ada703c9a51478c65e', 'https://ipapi.co/json/'];

async function fetchClientLocation(url) {
    let clientRes = await fetch(url);
    return clientRes.json();
}

function returnClientInfo(urlRes) {
    return {
            city: urlRes.city,
            longitude: urlRes.longitude,
            latitude: urlRes.latitude
    }
}

// get user lon and lat(when the page loads)
// there can be another error when my limit exceeds 1000.
// LATER: throw another error when the above happens
async function getUserLocation_ipgeolocate() {
    try {
        let userRes = await fetchClientLocation('https://api.ipgeolocation.io/ipgeo?apiKey=b27ecf90eaf747ada703c9a51478c65e');

        return returnClientInfo(userRes);
    } catch (error) {
        if (error instanceof TypeError) {
            throw new NetworkError('Network Problem');
        }
        // another error needed
    }
}

// get weather of user's location
async function getUserWeather(lat, lon) {
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=metric&appid=2a63fbe8f73d8e2ae551fffd101e59ee`);
        if (response.ok) {
            return response.json();
        } else {
            console.warn('HTTP error');
        }
    } catch (error) {
        console.error(error);
    }
}

// set user's location weather
async function setUserWeather() {
    try {
        let {city, longitude, latitude} = await getUserLocation_ipgeolocate();
        let userResult = await getUserWeather(latitude, longitude);
        let [current, daily] = [userResult.current, userResult.daily]
        let currentTime = myDate(current.dt * 1000);
        todayDiv(current, currentTime, city);

        getVideoWeatherCond(current.weather[0].main)

        for (let i = 1; i < daily.length - 1; i++) {
            let dailyCont = createDiv(daily[i]);
            resultFollowingDays.append(dailyCont);
        }
    } catch (error) {
        if (error instanceof NetworkError) {
            notFoundDiv(error.message);
            console.clear();
        }
    } finally {
        pageLoader.style.opacity = 0;
        setTimeout(() => {
            pageLoader.remove();
        }, 1100);
    }
}

document.addEventListener('DOMContentLoaded', async event => {
    await setUserWeather();
})

// get searched location
async function currentLocationWeather(userInput) {
    try {
        let wetherRes = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&units=metric&appid=2a63fbe8f73d8e2ae551fffd101e59ee`);
        return await wetherRes.json();
    } catch (error) {
        if (error instanceof TypeError) {
            throw new NetworkError('Network problem');
        }
    }
}

// load searched result
async function populateResult(userInput) {
    let loading = createLoader();
    form.append(loading);
    disableFormElements();

    try {
        let currentWeather = await currentLocationWeather(userInput);

        if (currentWeather.message) {
            enableFormElements();
            loading.style.opacity = 0;
            setTimeout(() => {
                loading.remove();
            }, 650);
            // notFoundDiv(currentWeather.message);
            notFoundDiv(`${userInput} not found`);
            return;
        }

        resultCont.classList.add('notOpaq');
        videoCont.classList.add('notOpaq');

        let locationName = currentWeather.name;

        let currentTime = myDate(currentWeather.dt * 1000);
        
        let weatherForecast = await getWeatherData(userInput);

        weatherForecast = weatherForecast.list.filter(list => list.dt_txt.indexOf("00:00:00") != -1);

        setTimeout(() => {
            todayDiv(currentWeather, currentTime, locationName);
            getVideoWeatherCond(currentWeather.weather[0].main);
            resultFollowingDays.innerHTML = ``;

            for (let i = 0; i <= 7; i++) {
                if (weatherForecast[i]) {
                    let dailyCont = createDiv_search(weatherForecast[i]);
                    resultFollowingDays.append(dailyCont);
                }
            }

            enableFormElements();
            loading.style.opacity = 0;
            setTimeout(() => {
                loading.remove();
                resultCont.classList.remove('notOpaq');
                videoCont.classList.remove('notOpaq');
            }, 650);

            if (userHistoryLists.length == 0) {
                closeHistoryBtn.nextElementSibling.remove();
            }

            if (userHistoryLists.length >= 8) {
                userHistoryLists.pop();
                let lastList = historyContainer.lastElementChild;
                lastList.classList.add('remove-list');
                setTimeout(() => {
                    lastList.remove();
                }, 2000);
            }

            let searchedFound = userHistoryLists.some(list => list.toLowerCase() == userInput.toLowerCase());

            if (!searchedFound) {
                // userHistoryLists.push(userInput);
                userHistoryLists.unshift(userInput);

                let searchList = createHistoryListCont(userInput);
        
                closeHistoryBtn.after(searchList);
        
                // localStorage.setItem('searched', JSON.stringify(userHistoryLists));    
            }
    
            localStorage.setItem('searched', JSON.stringify(userHistoryLists));
        }, 700);
    } catch (error) {
        if (error instanceof NetworkError) {
            console.warn(error.message);
            notFoundDiv(error.message);
            enableFormElements();
            loading.style.opacity = 0;
            setTimeout(() => {
                loading.remove();
            }, 650);
            // console.clear();
        }
    }
}

window.addEventListener('load', event => {
    userHistoryLists = JSON.parse(localStorage.getItem('searched'));

    if (userHistoryLists) {
        if (userHistoryLists.length == 0) {
            emptyHistoryContent();
        } else {
            userHistoryLists.forEach(list => {
                closeHistoryBtn.after(createHistoryListCont(list));
            })
        }
    } else {
            emptyHistoryContent();
            userHistoryLists = [];    
    }
    // if (userHistoryLists) {
    //     userHistoryLists.forEach(list => {
    //         closeHistoryBtn.after(createHistoryListCont(list));
    //     })
    // } else if(userHistoryLists.length == 0) {
    //     emptyHistoryContent();
    //     // userHistoryLists = [];
    // } else {
    //     emptyHistoryContent();
    //     userHistoryLists = [];
    // }
})

// fetch and populate searched result
async function fetchWeather(event) {
    event.preventDefault();
    
    let userInput = searchInput.value.trim();

    if (userInput == '') {
        return;
    }

    populateResult(userInput);

    searchInput.value = '';
}

async function getWeatherData(userInput) {
    try {
        let weatherRes = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${userInput}&units=metric&appid=2a63fbe8f73d8e2ae551fffd101e59ee`);
        let weatherJson = await weatherRes.json();
        return weatherJson;
    } catch (error) {
        console.warn(error);
    }
}

form.addEventListener('submit', fetchWeather);

// http://openweathermap.org/img/wn/13d@2x.png