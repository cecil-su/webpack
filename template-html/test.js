var fs = require('fs')
var path = require('path')

function travel(dir, callback) {
    fs.readdirSync(dir).forEach(function(file) {
        var pathname = path.join(dir, file)

        if (fs.statSync(pathname).isDirectory()) {
            travel(pathname, callback)
        } else {
            callback(pathname)
        }
    })
}

// 异步遍历
function list(dir, callback, finish) {
    fs.readdir(dir, function(err, files) {
        (function next(i) {
            if (i < files.length) {
                var pathname = path.join(dir, files[i]);

                fs.stat(pathname, function(err, stats) {
                    if (stats.isDirectory()) {
                        list(pathname, callback, function() {
                            next(i + 1);
                        });
                    } else {
                        callback(pathname, function() {
                            next(i + 1);
                        });
                    }
                });
            } else {
                finish && finish();
            }
        }(0));
    });
}

travel('./learn-node', function(pathname) {
    console.log(pathname)
})

list('./learn-node', function(pathname) {
    console.log(pathname)
}, function() {
    console.log('finish')
})
