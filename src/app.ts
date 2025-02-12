import http from 'http';

const requestListener = (req: http.IncomingMessage, res: http.ServerResponse) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, TypeScript with Node.js!');
};

const server = http.createServer(requestListener);

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
