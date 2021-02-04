const quotePara = document.querySelector('blockquote p');
const quoteAuth = document.querySelector('small');
const btnQuote = document.querySelector('button');


let allQuotes;

let firstTime = 0;

async function checkFirstTime() {
    // check if request has been made
    if (firstTime == 0) {
        await getQuote(); // wait for request
        firstTime += 1;
    }
}

async function getQuote() {
    let response = await fetch("https://type.fit/api/quotes");
    allQuotes = await response.json();
}

async function updadteQuote() {
    let randomNumber = Math.floor(Math.random() * 1645);
    let quote = allQuotes[randomNumber];
    quotePara.textContent = quote.text;
    quoteAuth.textContent = quote.author ? quote.author : "Unknown";
}

window.addEventListener('DOMContentLoaded', async () => {
    await checkFirstTime();
    updadteQuote();
});

let timerId = setTimeout(async function slideQuote() {
    await checkFirstTime();
    updadteQuote();
    timerId = setTimeout(slideQuote, 45000);
}, 0);

btnQuote.onclick = function (event) {
    clearTimeout(timerId);
    updadteQuote();
    timerId = setTimeout(async function slideQuote() {
        updadteQuote();
        timerId = setTimeout(slideQuote, 45000);
    }, 45000);
}