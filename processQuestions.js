const fs = require('fs');
const readline = require('readline');

function transformQuestionsIntoHTML() {
    reader = fs.createReadStream(__dirname + '/questions.yml', { encoding: 'utf8' });
    lineReader = readline.createInterface({
        input: reader
    });
    
    questionTemplate = fs.readFileSync(__dirname + '/questionTemplate.html', { encoding: 'utf8' });
    transformQuestion = createQuestionTranformer(questionTemplate);
    
    fs.open(__dirname + '/questions.html', 'w', (err, fd) => {
        fs.appendFileSync(fd, '<form>\n');

        lineReader.on('line', line => {
            htmlElement = transformQuestion(line);
            fs.appendFileSync(fd, htmlElement);
        }).on('close', () => {
            fs.appendFileSync(fd, '\n</form>');
        })
    });
}

function createQuestionTranformer(template) {
    counter = 1;

    return function(d) {
        questionSlug = d.slice(2).toLowerCase().replace(/\s+/g, '-');
        questionText = d.replace('- ', `${counter}. `)
        questionElement = (template
            .replace('{% questionText %}', questionText)
            .replace(/{% questionSlug %}/g, questionSlug));
    
        counter++;
        return questionElement
    }
}

transformQuestionsIntoHTML()
