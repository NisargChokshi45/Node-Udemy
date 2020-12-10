const fs = require('fs');

const data = fs.readFileSync('test.json');
const parseData = JSON.parse(data);

console.log(parseData);