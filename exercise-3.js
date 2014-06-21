var fs = require('fs');
var file = fs.readFileSync(process.argv[2]).toString().split('\n');
console.log(file.length - 1);
