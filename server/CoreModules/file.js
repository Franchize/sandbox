const fs = require('fs'); //fs is a library that reads files

fs.readFile("read.txt", (err, data)=>{
   if(err){
      throw err;
   }

      console.log(data.toString())
});
//.tostring is a method that returns the data into a string

//.appendFile creates a files
fs.appendFile("write.txt", "appended files",(err)=>{
   if(err){
      throw err;
   }
   console.log("Files successfully appended");
});


fs.unlink("write.txt", (err)=>{
   if(err){
      throw err;
   }
   console.log("file successfully deleted");
});
