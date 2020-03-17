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
console.log(logs);

//get json for specified date range
// let startDate = new Date("2020-17-03");
// let endDate = new Date("2020-18-03");


// let resultData = logs.filter(function (a) {

//     let hitDates = a.ProductHits || {};
//     // extract all date strings
//     hitDates = Object.keys(hitDates);
//     // improvement: use some. this is an improment because .map()
//     // and .filter() are walking through all elements.
//     // .some() stops this process if one item is found that returns true in the callback function and returns true for the whole expression
//     hitDateMatchExists = hitDates.some(function(dateStr) {
//         let date = new Date(dateStr);
//         return date >= startDate && date <= endDate
//     });
//     return hitDateMatchExists;
// });
// console.log(resultData);