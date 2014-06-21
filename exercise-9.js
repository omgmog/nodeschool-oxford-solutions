var http = require('http');
var bl = require('bl');
var data_set = [];

var get_url = function (url, index) {
    http.get(url, function (response) {
        response.setEncoding('utf8');
        response.pipe(
            bl (
                function (err, data) {
                    if (err) {
                      return console.error(err);
                    }
                    add_to_data_set(data, index);
                }
            )
        );
        response.on('end', function (data) {
            check_if_last(index);
        });
    });
};

var add_to_data_set = function (data, index) {
    data_set.push({
        'string': data.toString(),
        'index': index
    });
};

var check_if_last = function (index) {
    if (index === 2) {
        data_set.sort(function(a, b){
            if(a.index < b.index) return -1;
            if(a.index > b.index) return 1;
            return 0;
        });
        data_set.forEach(function (data) {
            console.log(data.string);
        });
    }
}

for (var i = 2; i<process.argv.length; i++) {
    get_url(process.argv[i], i);
}
