const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db/mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var Customer = require('./models/customer');

const app = express();

const PORT = 3000;


// var franchize = new Customer({
//    firstname: 'ASAP',
//    lastname: 'Cozy Tapes',
//    email: 'h222hi@gmail.com',
//    password: 's38niwd3',
//    phone: '28819393002',
//    address: '4424 Lean Peek, Purple, GA 60391',
// });


app.use(bodyParser.json());
app.post('/customers/create', (req,res)=>{
   var customer = new Customer(req.body);
   customer.GenerateJWTToken((result)=>{
      if(result.status == 'Success'){
           res.json(result);
      }else{
           res.status(400).send(result.ErrorDetails);
      }
   })

});


app.get('/customers',(req,res)=>{
    Customer.verifyJWTToken(req.header('X-Auth'))
    .then(result =>{
        return Customer.find({});
    })
    .then(result => res.status(200).send(result))
    .catch(err => res.status(400).send(err))
    });


app.get('/customer/:id',(req,res)=>{
    Customer.verifyJWTToken(req.header('X-Auth'))
    .then(result =>{
        return Customer.findOne({"ID":req.params.id});
    })

    .then(result => res.status(200).send(result))
    .catch(err => res.status(400).send(err));
});

app.patch('/customer/:id',(req,res)=>{
    req.body.update_timestamp = Date.now();
    Customer.verifyJWTToken(req.header('X-Auth'))
    .then(result =>{
        return Customer.findOneAndUpdate({"ID":req.params.id},req.body);
    })

    .then(result => res.status(200).send(result))
    .catch(err => res.status(400).send(err));
})

app.listen(PORT,()=>{
    console.log('Express listening on port:',PORT);
})
