const fs = require("fs");

fs.rm("file",{recursive:true},(err)=>{
    if(err) throw err;
    console.log("file deleted");
})