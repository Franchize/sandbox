function something(){
   console.log("Lemme know if you see this");
   console.log("This is the directory we are in -->", __dirname+"and this is the file name -->", __filename);
}

setTimeout(something, 100);
