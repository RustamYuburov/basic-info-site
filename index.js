const http = require('http');
const fs = require('fs');

http
  .createServer((req, res) => {
    let path = './';
    switch (req.url) {
      case '/':
        path += 'index.html';
        break;

      case '/about':
        path += 'about.html';
        break;

      case '/contact-me':
        path += 'contact-me.html';
        break;

      default:
        path += '404.html';
        break;
    }

    fs.readFile(path, (err, data) => {
      if (err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html' });
      return res.end(data);
    });
  })
  .listen(8080);

// OLD CODE
// if (req.url == '/') {
//   fs.readFile('index.html', (err, data) => {
//     if (err) throw err;
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write(data);
//     return res.end();
//   });
// } else if (req.url === '/about') {
//   fs.readFile('about.html', (err, data) => {
//     if (err) throw err;
//     res.writeHead(200, { 'Content-Type': 'text-html' });
//     res.write(data);
//     return res.end();
//   });
// } else if (req.url === '/contact-me') {
//   fs.readFile('contact-me.html', (err, data) => {
//     if (err) throw err;
//     res.writeHead(200, { 'Content-Type': 'text-html' });
//     res.write(data);
//     return res.end();
//   });
// } else {
//   fs.readFile('404.html', (err, data) => {
//     if (err) throw err;
//     res.writeHead(200, { 'Content-Type': 'text-html' });
//     res.write(data);
//     return res.end();
//   });
// }
