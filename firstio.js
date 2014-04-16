var fs = require('fs');

var pathStr = process.argv[2];

buf = fs.readFileSync(pathStr);

var str = buf.toString();

var lineArr = str.split("\n")

console.log(lineArr.length-1)

