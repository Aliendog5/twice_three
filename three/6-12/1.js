var http=require("http");
var fs=require("fs");
var modurl=require("url");
var mysql=require("mysql");
var qs=require("querystring");

var server=http.createServer(function(req,res){
    var url=req.url;
    var str="";
    req.on("data",function(data){
        str += data;
    })
    req.on("end",function(){
        var urlobj=modurl.parse(url,true);
        url=urlobj.pathname;
        var GET=urlobj.query;
        var POST=qs.parse(str);
        var params=req.method=="GET"?GET:POST;
        //判断接口
        var conn=mysql.createConnection({
            host:"localhost",
            user:"root",
            password:"",
            database:"user_table"
        })
        var username=params.username;
        var password=params.password;
       
        if(url=="/login"){     
            var sql=`select * from user_table.user where username="${username}" and password="${password}"`;     
            conn.query(sql,function(err,data){
                if(err){
                    res.end("服务器繁忙")
                }else{
                    if(data.length==0){
                        res.end("{status:0,msg:'用户名错误'}")
                    }else{
                        res.end("{status:1,msg:'登录成功'}")
                    }
                }
            });
        }else if(url=="/reg"){
            var sql1=`select * from user_table.user where username="${username}"`;
            conn.query(sql1,function(err,data){
                if(err){
                    res.end("服务器繁忙")
                }else{
                    if(data.length>0){
                        res.end("{status:0,msg:'用户已存在'}")
                    }else{                       
                        var sqlnew=`INSERT INTO user_table.user (username,password)VALUES('${username}','${password}')`
                        conn.query(sqlnew);
                        res.end("{status:1,msg:'注册成功'}")
                    }
                }
            });
        }else{
            fs.readFile("."+url,function(err,data){
                if(err){
                    res.end("404")
                }else{
                    res.end(data)
                }
            })
        }
    })
    
}).listen(9000)
console.log("开启服务器")