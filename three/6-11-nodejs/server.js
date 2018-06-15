var http=require("http");
var fs=require("fs");

var server=http.createServer(function(req,res){
    var url=req.url;
    console.log(url);
    fs.readFile("."+url,function(err,data){
        if(err){
            res.write("cuo")
        }else{
            res.write(data.toString())
        }
        res.end();
    })
}).listen(12345)