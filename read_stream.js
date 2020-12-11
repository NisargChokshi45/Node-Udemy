const fs = require('fs');

var data = "This TXT file is used to Read fileStream using Node !";

const writeStream = fs.createWriteStream('test.txt');
writeStream.write(data, 'utf-8');
writeStream.end();
writeStream.on('finish', () => console.log("Completed Write Operation on File"));
writeStream.on('error', (err) => console.log(err.stack));

const readStream = fs.createReadStream('test.txt');

readStream.setEncoding('utf-8');

readStream.on('data', (chunk) => data += chunk);
readStream.on('end', () => console.log(data));
readStream.on('error', (err) => console.log(err.stack));

