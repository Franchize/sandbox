const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//var Schema = mongoose.Schema;

var db = mongoose.connect('mongodb://localhost:27017/test');


module.exports = db;
