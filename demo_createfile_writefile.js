var fs = require('fs');
fs.writeFile('writefilemethode.txt','this introduction to file system with node js', function (err) {
    if (err) throw err;
    console.log('saved!');
})