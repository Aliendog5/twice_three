
var fs=require("fs");
var multer=require("multer");
var bodyParser=require("body-parser");
var express=require("express");

var app=express();
app.listen(9000);

var multerMiddleware=multer({dest:'upload/'}).any();//任意
// var multerMiddleware = multer({ dest: 'upload/' }).single("f1"); //单个指定文件名的文件
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static("www"));
app.use(multerMiddleware);
app.use("/upload",function(req,res){
    console.log(req.files);
    var oFile=req.files[0];
    var path=oFile.path;
    var newname=path+oFile.originalname;

    fs.rename(path,newname,function(err,data){
        if(err){
            res.end("nonono")
        }else{
            res.end("success")
        }
    });
    // [ { fieldname: 'f1',
    // originalname: 'server.js',
    // encoding: '7bit',
    // mimetype: 'application/javascript',
    // destination: 'upload/',
    // filename: '1db649cc31656f5d4b1507d464dc3e81',
    // path: 'upload\\1db649cc31656f5d4b1507d464dc3e81',
    // size: 352 } ]

})

