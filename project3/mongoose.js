const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

var connection = mongoose.connect('mongodb://localhost:27017/test');

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error'));
// db.once('open', function(){
//    console.log('We are connected!');
//    db.close();
// })

//this is how we create a new schema or document

var noteSchema = new Schema({
   date:{
      type: String,
      require: true,
      unique: true
   },
   note:{
      type: String,
      require: true,
   },
   updatedAt:{
      type: Date,
      default: Date.now()
   }

});

var noteModel = mongoose.model('note', noteSchema);
var note = new noteModel({
   date: new Date().toDateString(),
   note: 'Learning mongoose right now mane',
   updatedAt: new Date()
});

note.save()
.then(result=>{
   console.log(result);
   mongoose.connect.close(()=>console.log('Connection closed'));
})
.catch(err =>{
   console.log('Exception with code: ',err);
   mongoose.connect.close(()=>console.log('Connection closed'));
})
