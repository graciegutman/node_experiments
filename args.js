var args = process.argv;

function argsAdder(args) {
    var argsTotal = 0;
    for (var i = 2; i < args.length; i++) {
        argsTotal += Number(args[i]);
    }
    return argsTotal;
}

console.log(argsAdder(args))

