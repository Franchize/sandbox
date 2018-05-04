var MongoClient = require('mongodb').MongoClient;

var connectionPromise = MongoClient.connect('mongodb://localhost:27017');

connectionPromise.
   then(dbclient =>{
      const db_test = dbclient.db('test');
      console.log('Connected to database: ', db_test.databaseName);
      db_test.stats()
      .then(stats =>
            console.log('Database stats: ',JSON.stringify(stats, undefined, 2)));
            dbclient.close();

   })
   .catch(err => console.log('Unexpected err:' + err));
