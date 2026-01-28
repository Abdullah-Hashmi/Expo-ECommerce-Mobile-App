import express from "express";

const app = express();

app.get("/api/health", (req,res)=>{
    res.status(200).json({message:"success"});
});

const PORT=3000;

app.listen(PORT,()=>{
    console.log("Server is up and running")
})