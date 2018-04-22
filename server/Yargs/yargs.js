const argv = require('yargs').argv; //helps you build interactive command line tools by parsing arguments
const fs = require('fs');
const readline = require('readline'); //asks questions via cmd and receives a callback which it processes

//two flags, one to read the file and the file name
if(argv._[0] == 'read' && argv.fileName !=undefined){
   fs.readFile(argv.fileName,(err, data)=>{
      if(err){
         return console.log('Error reading file: ', argv.fileName);
      }
      console.log(data.toString());
   })
}else if (argv._[0] == 'delete' && argv.filename != undefined) {
   const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
   });
   rl.question('Are you sure you want to delete file ' + argv.fileName + '?', (answer)=>{
      var deleted = true;
      if (answer == 'Y' || answer == 'y'){
         fs.unlink(argv.fileName, (err)=>{
            if(err){
               console.log('Error deleting file: ', argv.fileName);
               rl.close();
               deleted = false;
            }
            if (deleted == true){
               console.log('File ' + argv.fileName + ' has been successfully deleted.');
            }
               rl.close();
         })
      }
      else{
         rl.close();
      }
   })

}else{
   console.log('Incorrect command');
}

//console.log(argv);

//in the command line, run node yargs.js read <or try delete> --fileName=read.txt
