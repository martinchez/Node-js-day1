//learning the variouse create file systems in node js
var fs = require('fs');
fs.appendFile('creativeminds.txt','Introduction to file ststems with nodejs!',function (err) {
    if (err) throw err;
    console.log('saved');
});