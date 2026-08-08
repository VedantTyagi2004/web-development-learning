import express from "express";
import { dirname } from "path" // these three are important to access to data  being added to form
import { fileURLToPath } from "url";
import bodyParser  from "body-parser"
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.post("/submit",(req,re)=>{
  console.log(req.body);
});
app.get("/", (req, res) => {
  // console.log(__dirname + "/public/index.html");
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
