const questions = [
    {
        question: `Quel est votre âge ?
        Ceci, afin de calculer un facteur de risque spécifique.`,
        choices: ['ans'],
        type: "number",
        name: "questions-answers",
        id: "1"

    },
    {
        question: `Quel est votre taille ?
        Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.`,
        choices: ['cm'],
        type: "number",
        name: "question-answers",
        id: "2"

    },
    {
        question: `Quel est votre poids ?
        Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.`,
        choices: ['kg'],
        type: "number",
        name: "question-answers",
        id: "3"

    },
    {
        question: 'Ces dernières 48 heures, quelle a été votre température la plus élevée ?',
        choices: ['degrés'],
        type: "number",
        name: "question-answers",
        id: "4"

    },
    {
        question: 'Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?',
        choices: ['Oui', 'Non'],
        type: "radio",
        name: "question-answers",
        id: "5"

    },
    {
        question: 'Ces derniers jours, avez-vous noté une forte diminution ou perte de votre goût ou de votre odorat ?',
        choices: ['Oui', 'Non'],
        type: "radio",
        name: "question-answers",
        id: "6"

    },
    {
        question: 'Ces derniers jours, avez-vous eu un mal de gorge et ou/des douleurs musculaires et/ou des courbatures inhabituelles ?',
        choices: ['Oui', 'Non'],
        type: "radio",
        name: "question-answers",
        id: "7"

    },
    {
        question: `Ces dernières 24 heures, avez-vous de la diarrhée ?
        Avec au moins 3 selles molles.`,
        choices: ['Oui', 'Non'],
        type: "radio",
        name: "question-answers",
        id: "8"

    },
    {
        question: `Ces derniers jours, avez-vous une fatigue inhabituelle ?`,
        choices: ['Oui', 'Non'],
        type: "radio",
        name: "question-answers",
        id: "9"

    },
    {
        question: 'Cette fatigue vous oblige-t-elle à vous reposer plus de la moitié de la journée ?',
        choices: ['Oui', 'Non'],
        type: "radio",
        name: "question-answers",
        id: "10"

    },
    {
        question: 'Depuis 24 heures ou plus, êtes-vous dans l\'impossibilité de vous alimenter ou de boire ?',
        choices: ['Oui', 'Non'],
        type: "radio",
        name: "question-answers",
        id: "11"

    },
    {
        question: 'Ces dernières 24 heures, avez-vous noté un manque de souffle inhabituel lorsque vous parlez ou faites un petit effort ?',
        choices: ['Oui', 'Non'],
        type: "radio",
        name: "question-answers",
        id: "12"

    },
    {
        question: `Avez-vous de l’hypertension artérielle mal équilibrée ?
        Ou avez-vous une maladie cardiaque ou vasculaire ? \nOu prenez vous un traitement à visée cardiologique ?`,
        choices: ['Oui', 'Non', 'Ne sait pas'],
        type: "radio",
        name: "question-answers",
        id: "13"

    },
    {
        question: 'Êtes-vous diabétique ?',
        choices: ['Oui', 'Non'],
        type: "radio",
        name: "question-answers",
        id: "14"

    },
    {
        question: 'Avez-vous ou avez-vous eu un cancer ces trois dernières années ?',
        choices: ['Oui', 'Non'],
        type: "radio",
        name: "question-answers",
        id: "15"

    },
    {
        question: `Avez-vous une maladie respiratoire ?
        Ou êtes-vous suivi par un pneumologue ?`,
        choices: ['Oui', 'Non'],
        type: "radio",
        name: "question-answers",
        id: "16"

    },
    {
        question: `Avez-vous une insuffisance rénale chronique dialysée ?`,
        choices: ['Oui', 'Non'],
        type: "radio",
        name: "question-answers",
        id: "17"

    },
    {
        question: 'Avez-vous une maladie chronique du foie ?',
        choices: ['Oui', 'Non'],
        type: "radio",
        name: "question-answers",
        id: "18"

    },
    {
        question: 'Êtes-vous enceinte ?',
        choices: ['Oui', 'Non', 'Non applicable'],
        type: "radio",
        name: "question-answers",
        id: "19"

    },
    {
        question: 'Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?',
        choices: ['Oui', 'Non', 'Ne sait pas'],
        type: "radio",
        name: "question-answers",
        id: "20"

    },
    {
        question: `Prenez-vous un traitement immunosuppresseur ?
        C’est un traitement qui diminue vos défenses contre les infections.
        Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).`,
        choices: ['Oui', 'Non', 'Ne sait pas'],
        type: "radio",
        name: "question-answers",
        id: "21"

    }
];


let i = 0;
let display = [];

const header = document.querySelector('.header-section');
const formulaire = document.querySelector('.formulaire');
const buttonHeader = document.querySelector('.header-section-content__button');
const intro = document.querySelector('.formulaire__introduction');
const buttonIntro = document.querySelector('.formulaire__introduction__button');
const circleShapeOne = document.querySelector('.circle-shape-one');
const circleShapeTwo = document.querySelector('.circle-shape-two');
const formulaireQuestions = document.querySelector('.formulaire__questions');
const count = document.querySelector('.increment');
const incrementBar = document.getElementById('inner-bar');
const totalBar = document.getElementById('outer-bar');
const buttonsDiv = document.querySelector('.buttons');
const next = document.querySelector('.next');
const back = document.querySelector('.back');


let questionContent = '';
questions.forEach(questionElement => {
    let answers = '';
    for (let i = 0; i < questionElement.choices.length; i++) {
        answers +=
            `<div>
            <input type=${questionElement.type} name=${questionElement.name} id=${questionElement.id}> <strong>${questionElement.choices[i]}</strong>
        </div>`;
    }

    questionContent +=
        `<div class="formulaire__questions__container">
                <h3>${questionElement.question}</h3>
                    <div class="flex">
                        ${answers}
                    </div>
            </div>`;
    display.push(questionContent);
    questionContent = '';
});

buttonHeader.addEventListener('click', () => {
    header.classList.toggle('hide');
    formulaire.classList.toggle('hide');

});



buttonIntro.addEventListener('click', () => {
    intro.classList.toggle('hide');
    buttonsDiv.classList.add('show');
    circleShapeOne.classList.toggle('current-step');
    circleShapeTwo.classList.toggle('current-step');
    next.classList.toggle('hide');
    back.classList.toggle('hide');
    formulaireQuestions.innerHTML = display[0];




});


next.addEventListener('click', () => {
    i++;
    if (i === display.length) {
        i = display.length - 1;
    }
    formulaireQuestions.innerHTML = display[i];
    count.textContent = i + 1;

    incrementBar.style.width = `${totalBar.style.width / 21}`
    console.log(incrementBar.style.width);
    console.log(totalBar.style.width);
    // const inputs = formulaireQuestions.getElementsByTagName('input');
    

    // for (let i = 0; i < inputs.length; i++) {
    //     console.log(inputs[i]);
    //         if (inputs[i].type === 'number') {
    //             console.log(inputs[i].value);
    //         }
    // }
});




back.addEventListener('click', () => {
    i--;
    if (i < 0) {
        i = 0;
    }
    formulaireQuestions.innerHTML = display[i];
    count.textContent = i + 1;

});


