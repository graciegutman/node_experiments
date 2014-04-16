//First Async IO
var fs = require('fs');

var pathStr = process.argv[2];

newLineCount = fs.readFile(pathStr, function (err, data){
    if (err) throw err;
    console.log(data.toString().split("\n").length-1)
});


