//express_demo.js 文件
var express = require('express');
var app = express();
 
app.get('/', function (req, res) {
   res.send('Hello World------------------>');
})
 
app.listen(1234);
console.log("开启服务器");
