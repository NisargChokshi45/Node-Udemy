let obj = { key: "value" };
let objString = "{'key':'value'}";

let objdata = JSON.stringify(obj);

console.log(objdata);
console.log(typeof objdata);

console.log(obj);
console.log(typeof obj);