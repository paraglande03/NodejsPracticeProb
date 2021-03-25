var fs = require('fs');
var data = fs.readFile('text.txt', function(err, data) {
    if (err) {
        console.log(err);
    }
    setTimeout(() => {
        console.log("display after 2 sec")
    }, 2000);

});
console.log('start here');