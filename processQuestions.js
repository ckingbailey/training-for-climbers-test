const fs = require('fs');
const { Transform } = require('stream');

function transformQuestionsIntoHTML() {
    reader = fs.createReadStream(__dirname + '/questions.yml');
    writer = fs.createWriteStream(__dirname + '/questions.html');

    questionTemplate = fs.readFileSync(__dirname + '/questionTemplate.html')
    tranformQuestion = createQuestionTranformer(questionTemplate)
    transformer = new Transform
    transformer._transform = (d, enc, callback) => {

    }
    
    reader.pipe(transform).pipe(process.stdout).on('end', () => console.log('fin!'));
}

function createQuestionTranformer(template) {
    return function(d, enc, callback) {
        questionSlug = d.toLowerCase().replace(/\s+/g, '-');
        questionElement = (template
            .replace('{% questionText %}', d)
            .replace(/{% questionSlug %}/g, questionSlug))
        return questionElement
    }
}

transformQuestionsIntoHTML()
