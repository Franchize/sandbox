const express = require('express');
const app = express();

// app.get('/',(req,res)=>{
//    //res.send('Hello World');
//    res.send({name: "Monarch", age: 28});
// })

//express.static
app.use(express.static('project2'));


app.get('/',(req,res)=>{
   res.send(index.html);
})

app.post('/welcome',(req, res)=>{
   res.send('You did it')
})

var customerList = {
   cust1:{"name":"Customer1", "ID": "1"},
   cust2:{"name":"Customer2", "ID": "2"},
   cust3:{"name":"Customer3", "ID": "3"},
   cust4:{"name":"Customer4", "ID": "4"}
};

app.get('/customer/:customerId', (req,res)=>{
   //res.send(req.params);

   var customerName;
   for(index in customerList){
      if(customerList[index].ID == req.params.customerId){
         customerName = customerList[index].name;
      }
   }
   if(customerName!=undefined){
      res.send('Customer Id:'+req.params.customerId+' has name: '+ customerName);
   }
   else{
      res.send('Customer Id:'+req.params.customerId+' does not exist');
   }

})


//middleware project1

app.use('/', (req,res,next)=>{
   req.name = 'Franchize';
   next();
})

app.get('/Welcome',(req,res)=>{
   res.send('Aye, whats up '+req.name)
})

// app.get('/Welcome/login', (req,res,next)=>{
//    res.log= 'Logging';
//    next();
// },(req,res,next)=>{
//    res.auth = 'authentication';
//    next();
// },(req,res,next)=>{
//    res.send(res.log + '  '+res.auth);
// })

var log = function(req,res,next){
   res.log = 'logging';
   next();
};

var auth = function(req,res,next){
   res.auth = 'authentication';
   next();
}

//app.use('/welcome/login', log, auth);
app.get('/welcome/login', log, auth, (req,res)=>{
   res.send(res.log +'  hey hey   ' +res.auth);
})


app.listen(3000);
