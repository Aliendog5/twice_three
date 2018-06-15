var http=require("http");
var fs=require("fs");
var modurl=require("url");
var qs=require("querystring");

var server=http.createServer(function(req,res){
    var url=req.url;
    if(url == "/favicon.ico")return;
    //post
    var str="";
    req.on("data",function(data){
        str+=data;
    })
    //post|get
    req.on("end",function(){
        var objurl=modurl.parse(url,true);
        url=objurl.pathname;

        var GET=objurl.query;
        var POST=qs.parse(str);
        var params=req.method=="GET"?"GET":"POST";
        console.log(`${req.method}  data==>${params}`)
        //判断接口
        if(url=="/login"){
            res.end("login");
        }else if(url=="/reg"){
            res.end("reg");
        }else{
            fs.readFile("."+url,function(err,data){
                if(err){
                    res.end("404");
                }else{
                    res.end(data);
                }
            })
        }
    })
}).listen(9001)
console.log("开启服务器")