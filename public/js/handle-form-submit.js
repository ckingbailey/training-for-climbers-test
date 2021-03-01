form = document.forms[0]
form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();

    answerZone = document.getElementById('answer-zone');
    responses = new FormData(form);

    for (let response of responses) {
        groupNum = (+response[0].replace(/\D*/g, '') - 1 ) % 3 + 1;
        groupElement = document.getElementById(`group-${groupNum}`)

        p = document.createElement('p')
        p.innerText = `${response[0]}: ${response[1]}`

        groupElement.appendChild(p)
    }
}