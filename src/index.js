import http from 'http';

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Welcome ALEX');
}).listen(8080, '127.0.0.1');

console.log('Sever running at http://127.0.0.1:8080');
