import express from "express";
import { dirname } from "path" // these three are important to access to data  being added to form
import { fileURLToPath } from "url";
import bodyParser  from "body-parser"
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended:true}));
const logger = (req,res,next)=>{
  console.log(req.url);
  next();
};
app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
