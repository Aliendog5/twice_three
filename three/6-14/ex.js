var express=require("express")
var app=express();
app.listen(9000)
// app.use(express.static("www"));
app.use("/nice",function(req,res){
    res.send(200)
});
