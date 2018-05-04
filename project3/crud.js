const MongoClient = require('mongodb').MongoClient;

// New DB: Diary
//Collection: Notes
MongoClient.connect('mongodb://localhost:/27017',(err, dbclient)=>{
    if(err){
        throw err;
    }

    const MYDIARY_DB = dbclient.db('MyDiary');
    const NOTES_COLLECTION = MYDIARY_DB.collection('notes');


    NOTES_COLLECTION.find({"date":new Date().getDate()}).toArray((err,noteToday)=>{
        if(err)
        throw err;
        if(noteToday.length == 0){
            NOTES_COLLECTION.insertOne({"date":new Date().getDate(),"note":"learning mongodb today"},(err, result)=>{
                if(err){
                    return console.log("Error inserting note to database"+err)
                }
                console.log("Inserted document:"+JSON.stringify(result.ops));
            })
        }else{
            console.log('Note for today already exists.. Updating it...');
            NOTES_COLLECTION.updateOne({"date":new Date().getDate},{
                $set:{"note":"learning mongodb today...so much more to learn"}
            },(err, status)=>{
                if(err){
                    throw err;
                }
                console.log('Matching record count:'+status.matchedCount);
                console.log('Updated record count:'+status.modifiedCount);
            });
        }
        NOTES_COLLECTION.deleteOne({"date":new Date().getDate()-1},(err, result)=>{
            if(err){
                throw err;
            }
            console.log('Deleted Record Count:'+result.deletedCount);
        })
        dbclient.close();
        console.log('Found note:'+JSON.stringify(noteToday, undefined, 2));
    })

})
