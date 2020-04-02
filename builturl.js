var url = require('url');
var adr = 'http://localhost:8080/default.html?year=2020&month=April';
var q = url.parse(adr,true);

console.log(q.host);//retirns host 8080
console.log(q.pathhname);//returns 'default.html'
console.log(q.search);
var qdata = q.query;
console.log(qdata.month);
