var args = process.argv;
var total = 0;
for (var i = 2;i<args.length;i++) {
    total += +args[i];
}
console.log(total);
