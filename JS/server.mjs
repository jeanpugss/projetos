// server.mjs
import { createServer } from 'node:http';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
<<<<<<< HEAD
  res.end('Muito Massa coisa de api basica hein World!\n');
});

// starts a simple http server locally on port 3000
server.listen(3001, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3001');
=======
  res.end('Muito Massa World!\n');
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
>>>>>>> 47aad84f9f041f6dd5cc9a6d23151133fe643811
});

// run with `node server.mjs`
// or `node --experimental-modules server.mjs`
// or `node --experimental-json-modules server.mjs`
// if you're using JSON modules

