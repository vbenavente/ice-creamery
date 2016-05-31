'use strict';

const http = require('http');
const fs = require('fs');
const stream = require('stream');

http.createServer((req, res) => {
  fs.createReadStream('./index.html').pipe(res);
  
}).listen(3000, () => {
  console.log('server is up on 3000');
});
