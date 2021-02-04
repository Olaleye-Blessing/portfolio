import { NetworkError } from "./../corona_update/error.js";

import { ResultError } from "./resultError.js";

import { quizParentCont, questionCont, questionDetail } from "./questionCont.js";

import { questionLoader } from "./loader.js";

const body = document.body;

const modeSwitch = document.querySelector('.mode');

const form = document.querySelector('form');

const allQuizCont = document.querySelector('.allquiz');

const startQuizBtn = form.querySelector('[data-btn="start"]');

const resultCont = document.querySelector('section.result');

const movingBg = document.querySelector('.moving-bg');

modeSwitch.addEventListener('click', switchMode);

modeSwitch.addEventListener('keydown', event => {
    if (event.key == " ") {
        event.preventDefault();
        switchMode();
    }
})

function switchMode(event) {
    root.classList.toggle('light');

    let theme = 'dark';

    if (root.classList.contains('light')) {
        theme = 'light';
    }

    localStorage.setItem('theme', theme);
}

const category = document.getElementById('category');

let allCategory;

let numberOfFetchingOptions = 0;

let numberOfFetchingOptionsQuestions = 0;

function errorMessage() {
    let errorP = document.createElement('p');
    errorP.classList.add('error_para');
    errorP.innerHTML = `Seems like there's network error! Please, press <button class="reload" data-button="reload">reload</button>`;
    return errorP;
}

async function loadCategoryOption() {
    try {
        let categoryRes = await fetch('https://opentdb.com/api_category.php');
        allCategory = await categoryRes.json();
        allCategory = allCategory.trivia_categories;
        return allCategory;
    } catch (error) {
        if (error instanceof TypeError) {
            if (numberOfFetchingOptions == 4) {
                throw new NetworkError('Network Error!!')
            }
            numberOfFetchingOptions += 1;
            await loadCategoryOption();
        }
    }    
}

function fillOptions(results) {
    for (let result of results) {
        let option = new Option(result.name, result.id);
        category.append(option);
    }
}

async function loadOptions() {
    try {
        await loadCategoryOption();
        fillOptions(allCategory);
    } catch (error) {
        if (error instanceof NetworkError) {
            let message = errorMessage();
            movingBg.after(message);
        }
    }
}

document.addEventListener('click', event => {
    let reloadBtn = event.target.closest('[data-button="reload"]');
    if (!reloadBtn) {
        return;
    }
    reloadBtn.parentElement.style.opacity = 0;
    setTimeout(() => {
        reloadBtn.parentElement.remove();
        loadOptions();
    }, 1100);
    
})

loadOptions();

form.addEventListener('submit', getQuiz);

async function getQuiz(event) {
    event.preventDefault();

    quizParentCont.innerHTML = ``;
    resultCont.innerHTML = ``;

    if (document.querySelector('form [data-button="reload"]')) {
        return;
    }

    if (document.querySelector('[data-description = "questionError"]')) {
        let currentErr = document.querySelector('[data-description = "questionError"]');
        currentErr.style.opacity = 0;
        setTimeout(() => {
            currentErr.remove();
        }, 1100);
    }

    let numberOfQues = form.querySelector('#number').value;

    if (!Number(numberOfQues)) {
        return;
    }

    if (+numberOfQues > 50) {
        return;
    }

    startQuizBtn.classList.add('disabled');
    startQuizBtn.disabled = true;
    disableFormElments();

    let loaderCont = questionLoader();

    loaderCont.classList.add('aniOpacity');

    allQuizCont.after(loaderCont);

    quizParentCont.innerHTML = ``;
    resultCont.innerHTML = ``;

    quizParentCont.classList.remove('padding');

    let difficulty = form.querySelector('#difficulty').value;

    let type = form.querySelector('#type').value;

    let categoryVal = category.value;

    let quizUrl = setQuizParam(numberOfQues, categoryVal, difficulty, type);

    let allQuestions = [];

    try {
        allQuestions = await fetchQuiz(quizUrl);
        allQuestions = checkSuccessfulQuiz(allQuestions);
    } catch (error) {
        if (error instanceof NetworkError || error instanceof ResultError) {
            let errorMes = errorMessage();
            errorMes.innerHTML = error.message;
            errorMes.setAttribute('data-description', 'questionError');
            form.after(errorMes);        
            enableFormElements();
        }
    }
    
    loaderCont.classList.remove('aniOpacity');
    loaderCont.classList.add('removeOpac');

    setTimeout(() => {
        loaderCont.remove();
    }, 2100);

    if (allQuestions) {
        questionCont(allQuestions);
    }
}

function checkSuccessfulQuiz(response) {
    if (response.response_code == 1) {
        throw new ResultError('No enough questions for the category you chose! Pls reduce the number of questions or choose another cathegory');
    }
    return response.results;
}

async function fetchQuiz(url) {
    try {
        let urlRes = await fetch(url);
        let questions = await urlRes.json();
        numberOfFetchingOptionsQuestions = 0;
        return questions;
    } catch (error) {
        if (error instanceof TypeError) {
            if (numberOfFetchingOptionsQuestions == 4) {
                throw new NetworkError('Network Error!! Pls Check your network before starting the quiz')
            }
            numberOfFetchingOptionsQuestions += 1;
            await fetchQuiz(url);
        }
    }
}

function setQuizParam(number, category, difficulty, type) {
    let url = new URL('https://opentdb.com/api.php');

    url.searchParams.set('amount', number)

    if (category !== 'any') {
        url.searchParams.set('category', category);
    }

    if (difficulty !== 'any') {
        url.searchParams.set('difficulty', difficulty);
    }

    if (type !== 'any') {
        url.searchParams.set('type', type);
    }

    return url;
}

allQuizCont.addEventListener('click', quizButtons);

function quizButtons(event) {
    let quizBtnSet = event.target.dataset.btn;
    if (!quizBtnSet) return;
    let nextBtn = event.target;
    
    nextBtn.disabled = 'true';
    nextBtn.classList.add('disabled');
    if (quizBtnSet == 'next') {
        let parentElement = event.target.closest('li');

        if (parentElement.nextElementSibling) {
            // parentElement.nextElementSibling.classList.add('quiz__display');
            parentElement.nextElementSibling.style.display = "block";
            setTimeout(() => {
                parentElement.nextElementSibling.classList.add('quiz__opaq');
            }, 1000);
        }
    } else if (quizBtnSet == 'finish') {
        quizDone();
        enableFormElements();
    }
}

function quizDone() {
    for (let list of quizParentCont.querySelectorAll('li')) {
        list.classList.add('quiz__done');
        for (let input of list.querySelectorAll('input')) {
            input.disabled = true;
            input.classList.add('disabled');
            input.nextElementSibling.classList.add('disabled');
        }
    }
    
    let userAnswers = checkAnswers();
    let correctAnswers = 0;
    
    correctAnswers = loadResult(questionDetail, userAnswers, correctAnswers);

    resultCont.innerHTML = `<p class="result__score">You scored <span class="result__correct">${correctAnswers}</span> out of <span class="result__total">${userAnswers.length}</span></p>`;

    let orderedResult = document.createElement('ol');
    orderedResult.innerHTML = ``;
    
    for (let eachdetail in questionDetail) {
        orderedResult.innerHTML += `<li>
        <p class="result__ques"><span>${+eachdetail + 1}.</span>${questionDetail[eachdetail][0]}</p>
        <p>Your answer: <span class="user__ans">${userAnswers[eachdetail]}</span></p>
        <p>Correct Answer: <span class="real__ans">${questionDetail[eachdetail][1]}</span></p>
    </li>`;
    
    }
    resultCont.append(orderedResult);
    let divBtn = document.createElement('div');
    divBtn.classList.add('quiz__next-btn');
    divBtn.innerHTML = `<button data-btn="anotherquiz" class="btn another-quiz">Take Another Quiz</button>`;
    resultCont.append(divBtn);
}

function checkAnswers() {
    let allAnswers = [];
    for (let answers of document.querySelectorAll('.quiz__answers')) {
        let answered = false;
        for (let answer of answers.querySelectorAll('input')) {
            if (answer.checked) {
                answered = true;
                allAnswers.push(answer.nextElementSibling.textContent);
            }
        }
        if(!answered) {
            allAnswers.push('----');
        }
    }
    return allAnswers;
}

function loadResult(results, userAnswers, correctAnswers) {
    let anserNum = 0;
    for (let result in results) {
        if (results[result][1] == userAnswers[anserNum]) {
            correctAnswers += 1;
        }
        anserNum += 1;
    }
    return correctAnswers;
}

function disableFormElments() {
    for (let elem of form.elements) {
        elem.disabled = true;
    }
    form.classList.add('disabled');
}

function enableFormElements() {
    for (let elem of form.elements) {
        elem.disabled = false;
    }
    form.classList.remove('disabled');
    startQuizBtn.classList.remove('disabled');
    startQuizBtn.disabled = false;
}

resultCont.addEventListener('click', takeAnother);

function takeAnother(event) {
    let btnAnother = event.target.closest('button.another-quiz');
    if (!btnAnother) return;
    let formCoordinates = form.getBoundingClientRect();
    let formCoordY = formCoordinates.top + window.pageYOffset;

    window.scrollTo(0, formCoordY - 100);

    // setTimeout(() => {
    //     quizParentCont.innerHTML = ``;
    //     resultCont.innerHTML = ``;
    // }, 5000);
}
