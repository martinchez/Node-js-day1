//applaying the request function such that whatever is in the query string will be what is 
//in the re.write(); function
var http = require('http');

http.createServer(function (req,res) {
    res.writeHead(200,{'content-type':'text/html'});
    res.write(req.url);
    res.end();
}).listen(8080);