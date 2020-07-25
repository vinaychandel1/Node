const os = require('os');

var totalmemory=os.totalmem();
var freememory=os.freemem();

console.log('Total Memory:'+totalmemory);
console.log(`TotalMemory:${totalmemory}`); 

console.log('Free Memory:'+os.freemem());
console.log('operating system Cpu architecture:'+os.arch());
console.log('information about each logical CPU core:'+os.cpus());

console.log('network interfaces that have been assigned a network address:'+os.networkInterfaces());

console.log(`operating system as a string:${os.release()}`); 