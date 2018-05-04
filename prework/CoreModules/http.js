const http = require('http');
const server = http.createServer((req,res)=>{
   res.writeHead(200,"Server created"); //this is how you include a message with a response
   res.end("ok"); //this is the message that'll appear on the scree
});

server.listen(3000,()=>{
   console.log(" we blessed")
});
