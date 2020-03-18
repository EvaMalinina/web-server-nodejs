//implement simple web-server
const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
  const { method, url } = request;
  response.writeHead(200, {'content-type': 'text/html'});
  const {statusMessage : status } = response;
  response.end(`My the first one web server works! ${JSON.stringify({status})}`);

  const data = JSON.stringify({ logs: [{ method, url }]});
  fs.writeFileSync('./generated.json', data,  'utf8');
}).listen(8081);

//fs module to create/modify files in file system
let fileContent = fs.readFileSync('./text.txt', 'utf8');
let parsed = fileContent.replace(/\d/gi, 'Num');

fs.writeFileSync('./text.parsed.txt', parsed, 'utf8');

//request json file with logs
let logs = JSON.parse(fs.readFileSync('./index.json'));
console.log(logs, "request");

//get logs for specified date range;
let dateRange = ( startDate, endDate ) => {
  for (key in logs) {
    if (logs.hasOwnProperty(key)) {
      
      for ( let i = 0; i < logs[key].length; i++) {

        let givenDate = new Date(logs[key][i]['date']);
        startDate = new Date( startDate ) ;
        endDate = new Date( endDate );
        
        if ( startDate <= givenDate && givenDate <= endDate ) {
          console.log(`Log in current diapason: ${logs[key][i]['method']} ${logs[key][i]['date']}`);
        }
        
      }
    } 
  } 
};

dateRange( '2020-03-06',  '2020-03-18');


