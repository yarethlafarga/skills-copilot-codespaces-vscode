// Create web server
// Create a web server that listens for incoming requests on port 3000. When a request comes in, it should respond with the text "Hello, world!".

const http = require('http');

const server = http.createServer((req, res) => {
  res.write('Hello, world!');
  res.end();
});

server.listen(3000);