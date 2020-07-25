var url='http://mylogger.io/log';


console.log(__dirname);
console.log(__filename);
function log(message){
//send an HTTP request
    console.log(message);
}

module.exports = log;

