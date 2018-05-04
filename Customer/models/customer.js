const mongoose = require('mongoose');
const moment = require('moment'); //ensures the user ID is unique for a user thats created, used for parsing dates
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
var Schema = mongoose.Schema;

var CustomerSchema = new Schema ({
   ID:{
      type: Number,
      require: true,
      unique: true,
      default: parseInt(moment(new Date()).format('mmssSSS'))
   },
   firstname:{
      type: String,
      require: true
   },
   lastname:{
      type: String,

   },
   email:{
      type: String,
      require: true,
      unique: true
   },
   password:{
      type: String,
      require: true,
   },
   phone:{
      type: String,
      require: true,
      unique: true
   },
   address:{
      type: String,
      require: true,
   },
   update_timestamp:{
      type: Date,
      default: Date.now()
   }

})

CustomerSchema.methods.GenerateJWTToken = function(callback){
   //add hidden variable for the certificate 
    bcrypt.hash(this.password,10,(err, hashed_pw)=>{
        this.password = hashed_pw;
        this.save()
        .then(result => {
            console.log(result);
            callback({status: 'Success',
                    token: jwt.sign({email: this.email, password: this.password},'abc123')
                    });
        })
        .catch(err => {
           callback({status: 'error',
        ErrorDetails: err});
        });
    })
}

CustomerSchema.statics.verifyJWTToken = function(token){
    var decoded;
    try{
        decoded = jwt.verify(token, 'abc123');
        return Promise.resolve(decoded);
    }catch(error){
        return Promise.reject(error);
    }
}

//make the model
var Customer = mongoose.model('Customer', CustomerSchema);
module.exports = Customer;
