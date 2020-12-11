const http = require('http');

const port = 8080;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "content-Type": "text/html" });
    res.end("<h1>Node JS</h1><p>Welcome to the Learning path of Node JS</p>");
});

server.listen(port);