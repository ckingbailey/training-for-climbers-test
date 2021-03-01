const fs = require('fs');
const readline = require('readline');
const thru = require('through2');

function transformQuestionsIntoHTML() {
    reader = fs.createReadStream(__dirname + '/questions.yml', { encoding: 'utf8' });
    writer = fs.createWriteStream(__dirname + '/questions.html');
    lineReader = readline.createInterface({ input: reader });

    questionTemplate = fs.readFileSync(__dirname + '/questionTemplate.html');
    transformQuestion = createQuestionTranformer(questionTemplate);
    
    (lineReader
        .on('data', d => {
            console.log(typeof d);
            console.log(d.length);
        })
        .pipe(thru({ objectMode: false }, transformQuestion))
        .pipe(process.stdout)
        .on('end', () => console.log('fin!'))
    );
}

// function whatIsIt(d, enc)

function createQuestionTranformer(template) {
    return function(d, enc, callback) {
        console.log('[INFO] `enc` data is a ' + enc);
        console.log('[INFO] d is a typeof ' + typeof d);
        console.log('[INFO] d is ' + d.length + ' long');
        console.log('[INFO] d has props ' + Object.getOwnPropertyNames(d));

        questionSlug = d.toLowerCase().replace(/\s+/g, '-');
        questionElement = (template
            .replace('{% questionText %}', d)
            .replace(/{% questionSlug %}/g, questionSlug));
        this.push(questionElement);
        
        callback();
    }
}

transformQuestionsIntoHTML()
