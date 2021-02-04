function shuffle(answers) {
    for (let i = answers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [answers[i], answers[j]] = [answers[j], answers[i]];
    }
    return answers;
}

export const quizParentCont = document.querySelector(".quiz__lists");

export let questionDetail = {};

export function questionCont(allquestions) {
    questionDetail = {};
    for (let i = 0; i < allquestions.length; i++) {
        
        let list = allquestions[i];
        questionDetail[i] = [list.question, list.correct_answer];
        let listCont = document.createElement("li");
        listCont.classList.add("quiz__list");
        // listCont.innerHTML = `<div class="quiz__questions" data-number="que${i}"><span>${i + 1}.</span> ${list.question}</div>`;
        listCont.innerHTML = `<fieldset class="quiz__questions" data-number="que${i}"><legend><span>${i + 1}.</span> ${list.question}</legend></fieldset>`;

        let listAnswers = document.createElement("ul");
        listAnswers.classList.add("quiz__answers");
        listAnswers.innerHTML = ``;

        let list_of_answers = [...list.incorrect_answers, list.correct_answer];

        if (list.type == "multiple") {
            list_of_answers = shuffle(list_of_answers);
        } else if (list.type == 'boolean') {
            list_of_answers = ["True", "False"];
        }
        
        for (let j = 0; j < list_of_answers.length; j++) {
            listAnswers.innerHTML += `<li>
                <input type="radio" name="que${i}" id="${list_of_answers[j].slice(0, 3)}${j}${i}">
                <label for="${list_of_answers[j].slice(0, 3)}${j}${i}">${list_of_answers[j]}</label>
                </li>`;
        }
        
        listCont.append(listAnswers);

        let btnCont = document.createElement("div");
        
        if (i == allquestions.length - 1) {
            btnCont.innerHTML = `<button data-btn="finish" class="quiz__btn btn">Submit</button>`;
        } else {
            btnCont.innerHTML = `<button data-btn="next" class="quiz__btn btn">Next</button>`;
        }
        if (i == 0) {
            listCont.classList.add('quiz__display');    
            setTimeout(() => {
                quizParentCont.classList.add("padding");
                listCont.classList.add('quiz__opaq')
            }, 1000);
        }

        setTimeout(() => {
            listCont.classList.add('quiz__display');
            listCont.append(btnCont);
            quizParentCont.append(listCont);
        }, 2300);
    }
}

