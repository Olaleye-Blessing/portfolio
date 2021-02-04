function windDriection(deg) {
    if (0 <= deg && deg <= 44) {
        return 'N'
    }
    if (deg == 45) {
        return 'N-E'
    }
    if (46 <= deg && deg <= 134) {
        return 'E'
    }
    if (deg == 135) {
        return 'S-E'
    }
    if (136 <= deg && deg <= 224) {
        return 'S'
    }
    if (deg == 225) {
        return 'S-E'
    }
    if (226 <= deg && deg <= 314) {
        return "W"
    }
    if (deg == 315) {
        return "N-W"
    }
    return "N";
}

export const todayResult = document.querySelector('.result__today');

export const resultFollowingDays = document.querySelector('.result__following');

export function todayDiv(current, time, city) {
    todayResult.innerHTML = `<div class="result__today-date">
    <span>${time[0]}</span>
    <span>${time[1]}</span>
    <span>${time[2]}</span>
    </div>
    <section class="result__today-detail">
        <h3 data-current="city">${city}</h3>
        <p data-current="description">${current.weather[0].main}</p>
        <div class="result__today-detail-img">
            <p data-current="temperature">${current.temp || current.main.temp}<sup>o</sup>C</p>
            <figure data-current="img_cont">
                <img src="https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png" alt="sun icon">
            </figure>
        </div>
        <div class="result__today-sub-detail">
            <div>
                <figure>
                    <img src="../svg/001-umbrella.svg" alt="">
                </figure>
                <p data-meas="precipitation">${current.humidity || current.main.humidity}</p>
            </div>
            <div>
                <figure>
                    <img src="../svg/002-wind.svg" alt="">
                </figure>
                <p data-meas="wind">${current.wind_speed || current.wind.speed}m/Sec</p>
            </div>
            <div>
                <figure>
                    <img src="../svg/003-direction.svg" alt="">
                </figure>
                <p data-meas="direction">${windDriection(current.wind_deg) || windDriection(current.wind.deg)}</p>
            </div>
        </div>
    </section>`
}

export function searchedTdayDiv(current, time, location) {
    // console.log(current);
    todayResult.innerHTML = `<div class="result__today-date">
    <span>${time[0]}</span>
    <span>${time[1]}</span>
    <span>${time[2]}</span>
    </div>
    <section class="result__today-detail">
        <h3 data-current="city">${location}</h3>
        <p data-current="description">${current.weather[0].main}</p>
        <div class="result__today-detail-img">
            <p data-current="temperature">${current.main.temp}<sup>o</sup>C</p>
            <figure data-current="img_cont">
                <img src="http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png" alt="sun icon">
            </figure>
        </div>
        <div class="result__today-sub-detail">
            <div>
                <figure>
                    <img src="../svg/001-umbrella.svg" alt="">
                </figure>
                <p data-meas="precipitation">${current.main.humidity}</p>
            </div>
            <div>
                <figure>
                    <img src="../svg/002-wind.svg" alt="">
                </figure>
                <p data-meas="wind">${current.wind.speed}m/Sec</p>
            </div>
            <div>
                <figure>
                    <img src="../svg/003-direction.svg" alt="">
                </figure>
                <p data-meas="direction">${windDriection(current.wind.deg)}</p>
            </div>
        </div>
    </section>`
}