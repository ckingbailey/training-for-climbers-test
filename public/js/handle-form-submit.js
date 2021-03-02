form = document.forms[0]
form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();

    answerZone = document.getElementById('answer-zone');
    responses = new FormData(form);

    tally = Array(3).fill(0);

    for (let response of responses) {
        category = (+response[0].replace(/\D*/g, '') - 1 ) % 3;
        tally[category]++;
    }

    document.querySelectorAll(`[id^=group-`)
    .forEach((element, i) => {
        p = document.createElement('p')
        p.innerText = tally[i]
        element.appendChild(p)
    })

}