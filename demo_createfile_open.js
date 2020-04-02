var fs = require('fs');

fs.open('writebyopen.txt', 'w', function (err,file) {
    if(err) throw err;
    console.log('saved');
});