const netList = require('network-list');
const fs=require('fs');


netList.scan({ip:'192.168.0'}, (err, arr) => {
fs.writeFile("./abc.txt",JSON.stringify(arr),function(err){
if(err){
console.log(err);
}
console.log("file saved");
}) // array with all devices
});