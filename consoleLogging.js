const assert = require('assert');

console.time('Timer');
console.log("This is Example of Console Logging");
console.info("Console Info");
console.warn("Console Warning");
console.error("Console Error");
console.dir(console);
console.timeEnd("Timer");

const add = (a, b) => {
    return a + b;
}

const result = add(5, 6);

// If Condition satisfies then, No message will be printed
assert(result == 11, "Test Case Failed"); 