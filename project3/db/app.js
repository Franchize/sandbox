const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var db = require('./mongoose');
var noteModel = require('../models/note');


var note = new noteModel({
   date: new Date().toDateString(),
   note: 'Learning mongoose right now mane',
   //updatedAt: new Date()
});

// note.save()
// .then(result=>{
//    console.log(result);
//    mongoose.connection.close(()=>console.log('Connection closed'));
// })
// .catch(err =>{
//    console.log('Exception with code: ', err);
//    mongoose.connection.close(()=>console.log('Connection closed'));
// })

noteModel.find({})
.then(result=>
   console.log(result))
.catch(err=>
   console.log(err));

noteModel.findById('5ae3830bbca80d462120a921')
.then(result=>console.log(result));

noteModel.findOneAndUpdate({"date": 'Fri Apr 27 2018'},{'note':"we love this stuff."})
.then(result=>console.log(result));
