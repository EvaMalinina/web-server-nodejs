//implement simple web-server
let http = require('http');

http.createServer((request, response) => {
  response.writeHead(200, {'content-type': 'text/html'});
  response.end('My the first one web server works!');
}).listen(8081);

//fs module to create/modify files in file system
let fs = require('fs');

let fileContent = fs.readFileSync('./text.txt', 'utf8');
let parsed = fileContent.replace(/\d/gi, 'Num');

fs.writeFileSync('./text.parsed.txt', parsed, 'utf8');

//request json file with logs
let logs = JSON.parse(fs.readFileSync('./index.json'));
console.log(logs, "request");


