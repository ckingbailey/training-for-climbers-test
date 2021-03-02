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
        'Technique and Tactics',
        'Physical'
    ]

    document.querySelectorAll(`[id^=group-`)
    .forEach((element, i) => {
        heading = document.createElement('h3');
        heading.innerText = categories[i];

        score = document.createElement('p');
        score.innerText = tally[i];

        element.appendChild(heading);
        element.appendChild(score);
    })

}