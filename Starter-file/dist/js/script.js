const questions = [
    {
        question: `Quel est votre âge ?
        Ceci, afin de calculer un facteur de risque spécifique.`,
        choices: ['ans'],
        type: "number",
        name: "questions-answers",
        id: "age",
        value: [""],
        pattern: "[0-1][0-9][0-9]"

    },
    {
        question: `Quel est votre taille ?
        Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.`,
        choices: ['cm'],
        type: "number",
        name: "question-answers",
        id: "taille",
        value: [""],
        pattern: "[0-3][4-9][0-9]"

    },
    {
        question: `Quel est votre poids ?
        Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.`,
        choices: ['kg'],
        type: "number",
        name: "question-answers",
        id: "poids",
        value: [""],
        pattern: "[0-3][0-9][5-9]"

    },
    {
        question: 'Ces dernières 48 heures, quelle a été votre température la plus élevée ?',
        choices: ['degrés'],
        type: "number",
        name: "question-answers",
        id: "température",
        value: [""],
        pattern: "[3][4-9]"

    },
    {
        question: 'Pensez-vous avoir eu de la fièvre ces derniers jours (frissons, sueurs) ?',
        choices: ['Oui', 'Non'],
        type: "radio",
        name: "question-answers",
        id: "fièvre",
        value: ["oui", "non"]

    },
    {
        question: 'Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?',
        choices: ['Oui', 'Non'],
        type: "radio",
        name: "question-answers",
        id: "toux",
        value: ["oui", "non"]

    },
    {
        question: 'Ces derniers jours, avez-vous noté une forte diminution ou perte de votre goût ou de votre odorat ?',
        choices: ['Oui', 'Non'],
        type: "radio",
        name: "question-answers",
        id: "odorat",
        value: ["oui", "non"]

    },
    {
        question: 'Ces derniers jours, avez-vous eu un mal de gorge et ou/des douleurs musculaires et/ou des courbatures inhabituelles ?',
        choices: ['Oui', 'Non'],
        type: "radio",
        name: "question-answers",
        id: "gorge-douleurs-courbatures",
        value: ["oui", "non"]

    },
    {
        question: `Ces dernières 24 heures, avez-vous de la diarrhée ?
        Avec au moins 3 selles molles.`,
        choices: ['Oui', 'Non'],
        type: "radio",
        name: "question-answers",
        id: "diarrhée",
        value: ["oui", "non"]

    },
    {
        question: `Ces derniers jours, avez-vous une fatigue inhabituelle ?`,
        choices: ['Oui', 'Non'],
        type: "radio",
        name: "question-answers",
        id: "fatigue",
        value: ["oui", "non"]

    },
    {
        question: 'Cette fatigue vous oblige-t-elle à vous reposer plus de la moitié de la journée ?',
        choices: ['Oui', 'Non'],
        type: "radio",
        name: "question-answers",
        id: "fatigue-moitié-journée",
        value: ["oui", "non"]

    },
    {
        question: 'Depuis 24 heures ou plus, êtes-vous dans l\'impossibilité de vous alimenter ou de boire ?',
        choices: ['Oui', 'Non'],
        type: "radio",
        name: "question-answers",
        id: "impossibilité-alimenter-boire",
        value: ["oui", "non"]

    },
    {
        question: 'Actuellement, comment vous vous sentez ?',
        choices: ['Bien', 'Assez bien', 'Fatigué(e)', 'Très fatigué(e)'],
        type: "radio",
        name: "question-answers",
        id: "sensation-de-malaise",
        value: ["bien", "assez-bien", "fatigué", "très-fatigué"]

    },
    {
        question: `Avez-vous de l’hypertension artérielle mal équilibrée ?
        Ou avez-vous une maladie cardiaque ou vasculaire ? \nOu prenez vous un traitement à visée cardiologique ?`,
        choices: ['Oui', 'Non', 'Ne sait pas'],
        type: "radio",
        name: "question-answers",
        id: "hypertension-artérielle",
        value: ["oui", "non"]

    },
    {
        question: 'Êtes-vous diabétique ?',
        choices: ['Oui', 'Non'],
        type: "radio",
        name: "question-answers",
        id: "diabétique",
        value: ["oui", "non"]

    },
    {
        question: 'Avez-vous ou avez-vous eu un cancer ces trois dernières années ?',
        choices: ['Oui', 'Non'],
        type: "radio",
        name: "question-answers",
        id: "cancer",
        value: ["oui", "non"]

    },
    {
        question: `Avez-vous une maladie respiratoire ?
        Ou êtes-vous suivi par un pneumologue ?`,
        choices: ['Oui', 'Non'],
        type: "radio",
        name: "question-answers",
        id: "respiratoire",
        value: ["oui", "non"]

    },
    {
        question: `Avez-vous vu apparaître une gêne respiratoire ou une augmentation de votre gêne respiratoire habituelle ?`,
        choices: ['Oui', 'Non'],
        type: "radio",
        name: "question-answers",
        id: "gêne-respiratoire",
        value: ["oui", "non"]

    },
    {
        question: `Avez-vous une insuffisance rénale chronique dialysée ?`,
        choices: ['Oui', 'Non'],
        type: "radio",
        name: "question-answers",
        id: "dialysée",
        value: ["oui", "non"]

    },
    {
        question: 'Avez-vous une maladie chronique du foie ?',
        choices: ['Oui', 'Non'],
        type: "radio",
        name: "question-answers",
        id: "foie",
        value: ["oui", "non"]

    },
    {
        question: 'Êtes-vous enceinte ?',
        choices: ['Oui', 'Non', 'Non applicable'],
        type: "radio",
        name: "question-answers",
        id: "enceinte",
        value: ["oui", "non", "non-applicable"]

    },
    {
        question: 'Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?',
        choices: ['Oui', 'Non', 'Ne sait pas'],
        type: "radio",
        name: "question-answers",
        id: "défenses-immunitaires",
        value: ["oui", "non", "ne-sait-pas"]

    },
    {
        question: `Prenez-vous un traitement immunosuppresseur ?
        C’est un traitement qui diminue vos défenses contre les infections.
        Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).`,
        choices: ['Oui', 'Non', 'Ne sait pas'],
        type: "radio",
        name: "question-answers",
        id: "traitement-immunosuppresseur",
        value: ["oui", "non", "ne-sait-pas"]

    },
];


let i = 0;
let display = [];

const header = document.querySelector('.header-section');
const symptôme = document.querySelector('.symptômes-section');
const recommendation = document.querySelector('.recommendation-section');
const testRappel = document.querySelector('.test-rappel');
const formulaire = document.querySelector('.formulaire');
const buttonHeader = document.querySelector('.header-section-content__button');
const intro = document.querySelector('.formulaire__introduction');
const buttonIntro = document.querySelector('.formulaire__introduction__button');
const circleShapeOne = document.querySelector('.circle-shape-one');
const circleShapeTwo = document.querySelector('.circle-shape-two');
const circleShapeThree = document.querySelector('.circle-shape-three');
const formulaireQuestions = document.querySelector('.formulaire__questions');
const progressBar = document.querySelector('.formulaire__progressbar')
const count = document.querySelector('.increment');
const incrementBar = document.getElementById('inner-bar');
const totalBar = document.getElementById('outer-bar');
const buttonsDiv = document.querySelector('.buttons');
const next = document.querySelector('.next');
const back = document.querySelector('.back');
const resultQuestionnaire = document.querySelector('.formulaire__result');
const buttonTestFooter = document.querySelector('.test-rappel__button');



function createQuestions(array) {
    let questionContent = '';
    let answers = '';
    for (let i = 0; i < array.choices.length; i++) {
        answers +=
            `<div>
            <input type=${array.type} name=${array.name} id=${array.id} value=${array.value[i]}> <strong>${array.choices[i]}</strong>
        </div>`;
    }
    questionContent +=
        `<div class="formulaire__questions__container">
                <h3>${array.question}</h3>
                    <div class="flex">
                        ${answers}
                    </div>
            </div>`;
    display.push(questionContent);
}

for (let i = 0; i < questions.length; i++) {
    createQuestions(questions[i]);
}

function incrementProgressBar() {
    let totalWidth = totalBar.style.width;
    let incrementWidth = incrementBar.style.width;
    console.log(totalWidth);
    incrementWidth += (totalWidth / 22);
    return incrementWidth;

}

function decrementProgressBar() {
    let totalWidth = totalBar.style.width;
    incrementBar.style.width -= (totalWidth / 22);

}

buttonHeader.addEventListener('click', () => {
    header.classList.toggle('hide');
    formulaire.classList.toggle('hide');

});

buttonTestFooter.addEventListener('click', () => {
    header.classList.toggle('hide');
    formulaire.classList.toggle('hide');
    symptôme.classList.toggle('hide');
    recommendation.classList.toggle('hide');
    testRappel.classList.toggle('hide');
});



buttonIntro.addEventListener('click', () => {
    intro.classList.toggle('hide');
    buttonsDiv.classList.add('show');
    circleShapeOne.classList.toggle('current-step');
    circleShapeTwo.classList.toggle('current-step');
    next.classList.toggle('hide');
    formulaireQuestions.innerHTML = display[0];

});


let value;
let idName;
let valuesofQuestions = [];
let facteurPronistique = 0;
let facteurMineur = 0;
let facteurMajour = 0;
formulaireQuestions.addEventListener('change', (event) => {
    idName = event.target.id;
    value = event.target.value;
    valuesofQuestions.push(value);
    

});




if (idName === 'hypertension-artérielle' || idName === 'diabétique' || idName === 'cancer' || idName === 'respiratoire' || idName === '"dialysée' || idName === 'foie' || idName === 'enceinte' || idName === 'défenses-immunitaires' || idName === 'traitement-immunosuppresseur') {
    if (value === 'oui') {
        facteurPronistique++;
    }
}

if (idName === 'fatigue' || idName === 'sensation-de-malaise') {
    if (value === 'oui') {
        facteurMineur++;
    }
}

if (idName === 'gêne-respiratoire' || idName === 'impossibilité-alimenter-boire') {
    if (value === 'oui') {
        facteurMajour++;
    }
}


if (idName === 'température') {
    if (value >= 39) {
        facteurMineur++;
    } else if (value <= 35.4) {
        facteurMajour++;
    }
}





function resultTest() {
    if (facteurPronistique === 0 || (facteurMineur === 0 || facteurMajour === 0) && valuesofQuestions[0] === 50) {
        resultQuestionnaire.innerHTML = `Nous vous conseillons de rester à votre domicile et
    de contacter votre médecin en cas d’apparition de nouveaux symptômes. Vous pourrez
    aussi utiliser à nouveau l’application pour réévaluer vos symptômes.`;
    } else if (((facteurMineur === 0 || facteurMajour === 0) && (valuesofQuestions[0] >= 50 && valuesofQuestions[0] < 70)) || facteurMineur === 1 || (facteurMineur === 0 || facteurMajour === 0) || ((facteurMineur === 0 || facteurMajour === 0) || (facteurMineur >= 1 && facteurMajour === 0)) || facteurPronistique === 0) {
        resultQuestionnaire.innerHTML = `Téléconsultation ou médecin généraliste ou visite à domicile`;
    } else if (facteurPronistique >= 1 || facteurMineur >= 2 || valuesofQuestions[12] === 'oui' || valuesofQuestions[17] === 'oui' || (facteurPronistique === 0 && facteurMajour >= 1) || facteurPronistique === 0 || facteurMajour >= 1 || (facteurPronistique === 0 && facteurMajour >= 1)) {
        resultQuestionnaire.innerHTML = `Appel 141`;
    } else if (idName === 'fièvre' || idName === 'toux' || idName === 'gorge-douleurs-courbatures') {
        if (valuesofQuestions[4] === 'oui' || valuesofQuestions[5] === 'oui' || valuesofQuestions[7] === 'oui') {
            if (facteurMineur === 0 || facteurMajour === 0) {
                resultQuestionnaire.innerHTML = `Votre situation ne relève probablement pas du Covid-19. Consultez votre
            médecin au moindre doute`;
            } else if ((facteurMineur >= 1 || facteurMajour >= 1) || facteurPronistique >= 1) {
                resultQuestionnaire.innerHTML = `Votre situation ne relève probablement pas du Covid-19. Un avis médical est
            recommandé. Au moindre doute, appelez le 141.`;
            }
        }

    } else if (idName === 'fièvre' && idName === 'toux' && idName === 'gorge-douleurs-courbatures' && idName === 'diarrhée' && idName === 'fatigue') {
        if (valuesofQuestions[4] === 'non' && valuesofQuestions[4] === 'non' && valuesofQuestions[4] === 'non' && valuesofQuestions[4] === 'non' && valuesofQuestions[4] === 'non') {
            resultQuestionnaire.innerHTML = `Votre situation ne relève probablement pas du Covid-19. N’hésitez pas à contacter votre
        médecin en cas de doute. Vous pouvez refaire le test en cas de nouveau symptôme pour
        réévaluer la situation. Pour toute information concernant le Covid-19 allez vers la page
        d’accueil.`;
        }
    } else {
        resultQuestionnaire.innerHTML = `Restez chez vous au maximum en attendant que les symptômes disparaissent.
    Prenez votre température deux fois par jour. Rappel des mesures d’hygiène.`;
    }

}



next.addEventListener('click', () => {
    i++;
    if (i === display.length - 1) {
        next.textContent = 'Résultat finale';

    }

    if (i === display.length) {
        formulaireQuestions.classList.add('hide');
        buttonsDiv.classList.remove('show');
        back.classList.add('hide');
        next.classList.add('hide');
        progressBar.classList.add('hide');
        circleShapeTwo.classList.toggle('current-step');
        circleShapeThree.classList.toggle('current-step');
        resultQuestionnaire.classList.remove('hide');
        resultTest();
    }

    if (idName === 'age') {
        if (value < 15) {
            formulaireQuestions.classList.add('hide');
            buttonsDiv.classList.remove('show');
            next.classList.add('hide');
            back.classList.add('hide');
            progressBar.classList.add('hide');
            circleShapeTwo.classList.toggle('current-step');
            circleShapeThree.classList.toggle('current-step');
            resultQuestionnaire.classList.remove('hide');
            resultQuestionnaire.innerHTML = `Prenez contact avec votre médecin généraliste au moindre doute.
                Cette application n’est pour l’instant pas adaptée aux personnes de moins de 15 ans. En cas d’urgence, appeler le 15.`;
        } else if (value >= 70) {
            facteurPronistique++;
        }
    }
 

    formulaireQuestions.innerHTML = display[i];
    count.textContent = i + 1;
    back.classList.remove('hide');

});




back.addEventListener('click', () => {
    i--;
    if (i === 0) {
        back.classList.toggle('hide');
    }


    formulaireQuestions.innerHTML = display[i];
    count.textContent = i + 1;

    value = event.target.value;
    valuesofQuestions.pop(value);

});








