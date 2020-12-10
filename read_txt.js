const fs = require('fs');

fs.writeFileSync('test.txt', 'Hello there ! This is a Sample file used for Reading & Writing data using Node JS', err => {
    !err ? console.log("File Created !") : console.log(err);
});


const content = fs.readFileSync('test.txt', 'utf-8');

console.log(content);