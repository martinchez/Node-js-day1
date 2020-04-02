var fs= require('fs');

fs.open('openfilesystem.txt','w', function (err,file) {
    if(err) throw err;
    console.log('Saved!');
});