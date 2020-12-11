const fs = require('fs');
const xml2js = require('xml2js');

let parser = new xml2js.Parser();

fs.readFile('test.xml', (err, data) => {
    parser.parseString(data, (err, result) => {
        !err ? console.log(result) : console.log(err);
    })
})