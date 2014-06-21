var fs = require('fs');
var dir = fs.readdir(process.argv[2], function (err, data) {
    var type = process.argv[3];
    for (var i=0;i<data.length;i++) {
        if (data[i].match("."+type)) {
            console.log(data[i]);
        }
    }
});
