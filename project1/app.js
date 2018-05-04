const http = require('http');
const fs = require('fs');
const log = require('./logger');


http.createServer((req, res)=>{
   console.log(req.method)
   if(req.method == 'GET'){
      log('You made a GET request ');
      // res.write('you called get');
      // res.end();
      displayForm(res);
   }
   else if(req.method == 'POST'){
      log('You made a POST request');
      res.write('post method used');
      res.end();
   }
}).listen(4000,()=>{
   console.log('we live baby... yeah');
   log('Listing on port 4000');
});

function displayForm(res){
   fs.readFile(__dirname +"/project1/web/index.html",(err, data)=>{
      if(err) throw err;
      res.writeHead(200, '{Content-Type="text/html"}');
      res.write(data);
      res.end('Ok');

   })
}
