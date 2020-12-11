const crypto = require('crypto');

let data = "This Line will be encoded using MD5 Hash algorithm.";

console.log(crypto.createHash('md5').update(data).digest('hex'));

function randomValueHex(len) {
    return crypto.randomBytes(Math.ceil(len / 2)).toString('hex').slice(0, len);
}

const result = randomValueHex(12);
console.log(result);
