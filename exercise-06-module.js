var fs = require('fs');

module.exports = function (dir, filetype, callback) {
    var dir = fs.readdir(dir, function (err, data) {

        if (err) {
            return callback(err);
        }

        var matches = [];

        for (var i=0;i<data.length;i++) {
            if (data[i].match("."+filetype)) {
                matches.push(data[i]);
            }
        }
        callback(null, matches);
    });
};
