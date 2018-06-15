var express=require("express");
var app=express()
app.listen(9000);
app.use("/download",function(req,res){
    console.log(__filename);//D:\three\6-15\down.js

    // res.download(__filename);//localhost:9000/download
    res.download("./ex.js")
})