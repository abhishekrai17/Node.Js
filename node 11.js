//UPPER-CASE MODULE
//CHANGES THE OUTPUT TO UPPER-CASE

var http = require('http');
var uc = require('upper-case');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.write(uc.upperCase('hello this is abhishek rai the face of jamtara'))
    res.end()
}).listen(3000);