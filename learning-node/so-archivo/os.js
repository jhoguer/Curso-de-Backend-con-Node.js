const os = require('os');

console.log("CPU info ", os.cpus());
console.log("IP address ", os.networkInterfaces().lo.map(i => i.address));
console.log("Type", os.type());
console.log("Free memory", os.freemem())
console.log("SO Version", os.release())
console.log("Usr info", os.userInfo());