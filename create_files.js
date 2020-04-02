//we are going to explore the various methodes of creating files using node js
// we will adress fs.appendFile || fs.open || fs.writeFile

var fs = require('fs');

fs.appendFile('filesystem.txt','hello ths is introduction to nodejs file syste',function(err){
    if(err) throw err;
    console.log("saved!");
});