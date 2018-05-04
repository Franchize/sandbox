const fs = require('fs');
const _ = require('lodash');


var log = function log (data){
   fs.appendFile('log.txt',data+". Time:"+_.now()+"\n",(err)=>{
      if(err) throw err

   })
}


module.exports = log;
