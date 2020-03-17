# web-server-nodejs

NODEJS HOMEWORK No1

Use NodeJS to implement web server which writes every request info to one JSON file.

Requirements:
• Use standard http module to implement simple web-server;
• Use fs module to create/modify files in file system;
• Organize all information inside one JSON file;
• Write every request info to array in json file.

Acceptance criteria:
• Server responds to all requests(try to make a call with POST and DELETE methods using Postman) with status 200 and JSON payload;
• Server responds with json {status: ‘ok'} to all requests;
• Every request information can be found in json file on server side;
• Source code uploaded to repository and link sent to Kyrylo_Yezhov@epam.com;

Optional criteria:
• Ability to request json file with logs;
• Ability to get logs for specified date range; 

Notes:
1) All information about request can be found in request object
2) Json file can look like 
{
  «logs»: [
    {method: ‘POST’, url: ‘/test_url’, time: 97346772843} 
  ]
}
