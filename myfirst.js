var http= require('http');
var dt =require('./myfirstmodule')

http.createServer(function (req,res) {
    res.writeHead(200,{'content-Type':'text/html'});
    res.write("the date and time are cur vb;m,.?ently:" + dt.myDateTime());
    res.end("welcome again");
}).listen(8080);