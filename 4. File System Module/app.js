const fs=require('fs');

//const files=fs.readdieSync('./');
//const.log(files);

fs.readdir('./',function(err,files){

    if(err)
    console.log('Error',err);
    else
    console.log('Result',files);
});