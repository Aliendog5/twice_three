//https://www.ishsh.com/star
var http=require("http");
var https=require("https");
var fs=require("fs");
var cheerio=require("cheerio");
var modurl=require("url");

http.createServer(function(req,res){
    var url=req.url;
    if(url=="/favicon.ico") return;
    var urlobj=modurl.parse(url);      
    url=urlobj.pathname;
    console.log(url)
    if(url=="/nice"){
        var target="https://www.ishsh.com/sexy";
        https.get(target,function(res1){
            var str="";           
            res1.on("data",function(data){
                str+=data;
            })
            res1.on("end",function(){
                var $=cheerio.load(str);              
                var img=[];                        
                $("#post-list li .post-thumbnail").each(function(){    
                  var imgs={
                    title: $(this).find(".img").attr("title"),
                    href:$(this).find(".img").children("img").attr("data-original")
                   } 
                   img.push(imgs)                                  
                }) 
                res.end(JSON.stringify(img)) ;     
            })           
        })
    }else{
        fs.readFile("www"+url,function(err,data){
            if(err){
                res.end("404")
            }else{
                res.end(data)
            }
        })
    }
}).listen(9000)