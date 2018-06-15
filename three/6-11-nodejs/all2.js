var http=require("http");
var fs=require("fs");
var modurl=require("url");
var qs=require("querystring");

var server=http.createServer(function(req,res){
    var url=req.url;
    //post
    var str='';
    req.on("data",function(data){
        str+=data;
    })
    // post | get
    req.on("end",function(){
        var urlobj=modurl.parse(url,true);
        url=urlobj.pathname;

        var GET=urlobj.query;
        var POST=qs.parse(str);

        //判断接口
        if(url=="/login"){
            res.end("login")
        }else if(url=="/reg"){
            res.end("reg")
        }else{
            fs.readFile("."+url,function(err,data){
                if(err){
                    res.end("404")
                }else{
                    res.end(data);
                }
            })
        }
    })
}).listen(9000)
console.log("开启服务器")