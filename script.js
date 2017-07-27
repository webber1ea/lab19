var http = require('http');
var quotes = require('./quotes');

http.createServer(function(request, response){
  response.writeHead(200, { "Content-type": "text/plain"});
  response.write(quotes[Math.floor(Math.random() * quotes.length)]);
  response.end()
}).listen(8888);


function getQuote () {
  console.log(quotes);
}

getQuote();
