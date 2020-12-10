const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');

// Writing Data to CSV
const writeStream = fs.createWriteStream('test.csv');

csv
    .write([["No.", "Skill"], ["1", "HTML"], ["2", "CSS"], ["3", "JS"], ["4", "Github"], ["5", "SQL"]], { headers: true })
    .pipe(writeStream);


// Reading Data from CSV
fs.createReadStream(path.resolve(__dirname, 'test.csv'))
    .pipe(csv.parse({ headers: true }))
    .on('error', error => console.log(error))
    .on('data', data => console.log(data))
    .on('end', rowCount => console.log(`Parsed ${rowCount} rows !`));