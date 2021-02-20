const http = require('http');
const port = process.env.PORT || 3000;

http.createServer(function(request, response) {
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.end('Hello Mohd Emran Khan !');
}).listen(port);

console.log(`Server running at http://localhost:${port}`);