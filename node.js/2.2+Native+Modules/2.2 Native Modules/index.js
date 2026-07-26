const fs=require("fs");
fs.writeFile("message.txt","this is meee , practicing node.js",(err)=>{
    if(err)throw err;
    console.log("file has been saved");
});
const stream = fs.createReadStream("message.txt", {
  encoding: "utf8",
});

stream.on("data", (chunk) => {
  console.log(chunk);
});