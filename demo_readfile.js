//this script is for reading diles 
//the read methode is fs.readFile() it reads the file in our system
////this script is conected to a html page demo_readfile.html

var http = require('http');
var fs = require('fs');

http.createServer(function (req,res) {
    fs.readFile('demo_readfile.html',function (err,data) {
        res.writeHead(200, { 'content-Type': 'text/html' });
        res.write(data);
        res.end();
    });
}).listen(8080);