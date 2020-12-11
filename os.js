const os = require('os');

console.log("OS Temp Directory: ", os.tmpdir());
console.log("OS Hostname: ", os.hostname());
console.log("OS Type:", os.type());
console.log("OS Version", os.version());
console.log("OS UserInfo", os.userInfo());
console.log("OS Platform:", os.platform());
console.log("OS Architecture", os.arch());