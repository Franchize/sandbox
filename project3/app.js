//start mongodb by going to ~ mongodb.../bin and run cmd mongod --dbpath /Users/monarch/Documents/Frontend/sandbox/node_course/project3/MongoDB
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017',(err, dbclient)=>{
   if(err){
      throw err;
   }

   const db_test = dbclient.db('test');
   console.log('Connected successfully to database: '+ db_test.databaseName);

   db_test.stats((err,result)=>{
      console.log('DB Stats: '+JSON.stringify(result,undefined,2));

   });
   dbclient.close();
})
