var express=require("express")
var app=express();
// app.get("/",function(req,res){
//     console.log("主页 GET 请求")
//     res.end("hello GET")
// })
//  POST 请求
app.post('/', function (req, res) {
    console.log("主页 POST 请求");
    res.send('<---------------------------Hello POST---------------->');
 })
 //  /del_user 页面响应
// app.get('/del_user', function (req, res) {
//     console.log("/del_user 响应 DELETE 请求");
//     res.send('删除页面');
//  })
  
 app.listen(12345)
 console.log("开启服务器")