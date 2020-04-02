var fs =require('fs');

fs.writeFile('writefilefs.txt','hello content!', function (err) {
    if (err) throw err;
    console.log('saved');
});