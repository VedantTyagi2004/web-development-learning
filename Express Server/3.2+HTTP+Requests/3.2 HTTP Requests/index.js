import express from "express";
const app = express();
app.get("/",(req , res)=>{
    res.send("<h2>Hello World!!!!!<h2>");
});
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});
<<<<<<< HEAD
=======
app.get("/about",(req , res)=>{
    res.send("<h2>You are on about page<h2>");
});
app.get("/contact",(req , res)=>{
    res.send("<h2>You are on contact page<h2>");
});
>>>>>>> f088433 (yes)
