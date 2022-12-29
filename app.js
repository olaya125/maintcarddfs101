const express = require("express");
const app = express();
const mongoose = require("mongoose");
const mongoUrl = "mongodb+srv://olaya:00001960@cluster0.v1wokoq.mongodb.net/test"
mongoose.connect(mongoUrl,{
    useNewUrlParser:true
}).then(() => {console.log("connected to database");})
.catch((err) => console.log(err))
app.use(express.json())
app.listen(5000,() => {
    console.log("server started");
})
app.post("/post",async (req,res) => {
    console.log(req.body)
    const {data,age} = req.body

    try{
        if(data=="aliss"&& age=="50") {
            res.send({status:"ok"})
        }
        else{
            res.send("user not found")
        }
        
    }
    catch(error){
            res.send({status:"error"})
    }
})