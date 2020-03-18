//implement simple web-server
const http = require('http');
const fs = require('fs');
const PORT = './generated.json';

http.createServer((request, response) => {
    const status = 'OK';
    const { method, url } = request;
    const data = { method, url, time: Date.now() };
    createData(data, response);
    response.writeHead(200, {'Content-type': 'application/json'});
    response.end(JSON.stringify({ status }));
}).listen(8081);

let createData = (data, response) => {
    try {
        let parsedData = {logs: []};

        if (fs.existsSync(PORT)) {
            const generatedData = fs.readFileSync(PORT);

            if ( generatedData.length ) {
                parsedData = JSON.parse(generatedData);
                if (!parsedData.logs) {
                  parsedData.logs = [];
                }
            }
        }        

        parsedData.logs.push(data);

        parsedData = JSON.stringify(parsedData, null, 2);
        fs.writeFileSync(PORT, parsedData,  'utf8');

    } catch (error) {
        response.writeHead(500, {'Content-type': 'application/json'})
        response.end(JSON.stringify({error: error.message}));
    }
};

// get logs for specified date range
let logs = JSON.parse(fs.readFileSync('./generated.json'));
let dateRange = ( startDate, endDate ) => {
  for (key in logs) {
    if (logs.hasOwnProperty(key)) {
      
      for ( let i = 0; i < logs[key].length; i++) {

        let givenDate = new Date(logs[key][i]['time']);
        startDate = new Date( startDate ) ;
        endDate = new Date( endDate );
        
        if ( startDate <= givenDate && givenDate <= endDate ) {
          console.log(`Log in current diapason: ${logs[key][i]['method']} ${logs[key][i]['time']}`);
        }
        
      }
    } 
  } 
};

dateRange( '2020-03-06',  '2020-03-18');


