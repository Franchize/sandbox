const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

//this is how we create a new schema 

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

module.exports = noteModel;
