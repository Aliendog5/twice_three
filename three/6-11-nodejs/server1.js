//1.引入模块
var http=require("http");
var fs=require("fs");
var users={};
//2.创建服务,监听端口
var server=http.createServer(function(req,res){
    var url=req.url;  
    //接口
    var getObj={};
    if(url.indexOf("?")!=-1){//   /login?username=aaa&password=123
        var arr1=url.split("?");//[ /login,username=aaa&password=123]
        url=arr1[0];//   /login   /reg
        var arr2=arr1[1].split("&");//[username=aaa,password=123]
        for(let i=0;i<arr2.length;i++){
           var arr3= arr2[i].split("=");
           getObj[arr3[0]]=arr3[1];
        }
        // console.log(getObj);//{ username: 'aaa', password: '123' }

        //判断接口
        if(url=="/login"){
            var username=getObj.username;
            var password=getObj.password;
            console.log(users[username])
            if(users[username]){
                if(users[username]==password){
                    res.end("{status:1,msg:'登录成功'}")
                }else{
                    res.end("{status:0,msg:'账号或密码错误1'}")
                }
            }else{
                res.end("{status:0,msg:'账号或密码错误2'}")
            }
            
        }else if(url=="/reg"){
            var username=getObj.username;
            var password=getObj.password;
            if(users[username]){
                // res.end("{status:0,msg:'存在'}")
                res.json({
                    status: 0,
                    msg: "用户名已存在"
                })
            }else{
                users[username]=getObj.password;
                // res.end("{status:1,msg:'注册成功'}")
                res.json({
                    status: 1,
                    msg: "可以注册"
                })
    
            }
        }
    }else{
        fs.readFile("."+url,function(err,data){
            if(err){
                res.end("404")
            }else{
                res.end(data)
            }
        })
    }
}).listen(9001)
console.log("开启服务器")