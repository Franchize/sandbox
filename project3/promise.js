var promise = new Promise((resolve, reject)=>{
   setTimeout(()=> {
      resolve("promise fulfilled")
   }, 1000);
   JSON.parse('hi hi');
});


promise.then((message)=>{
   console.log(message);
},
//(err)=>{
//    console.log(err);
// }
).catch((err)=>{
   console.log('Unexpected error: '+ err )
});
