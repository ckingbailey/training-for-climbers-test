form = document.forms[0]
form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();

    answerZone = document.getElementById('answer-zone');
    responses = new FormData(form);

    tally = Array(3).fill(0);

    for (let response of responses) {
        category = (+response[0].replace(/\D*/g, '') - 1 ) % 3;
        score = +response[1];
        tally[category] += score;
    }

    categories = [
        'Mental',
        'Technique & Tactics',
        'Physical'
    ]

    document.querySelectorAll(`[id^=group-`)
    .forEach((element, i) => {
        element.getElementsByClassName('score-heading')[0].innerText = categories[i];
        element.getElementsByClassName('score')[0].innerText = tally[i];
    })

}