const fs = require('fs');
const ejs = require('ejs');
const yaml = require('node-yaml');

questions = yaml.readSync(__dirname + '/src/data/questions.yml')
    .reduce((acc, q) => {
        acc.push({
            text: q,
            slug: q.toLowerCase().replace(/\s+/g, '-')
        })
        return acc
    }, []);

ejs.renderFile(__dirname + '/src/views/questions.ejs', { questions }, (err, str) => {
    if (err) return console.error(error);

    fs.writeFileSync(__dirname + '/public/index.html', str)

    console.log('Fin.')
})
