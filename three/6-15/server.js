var http=require("http");
var formidable=require("formidable");
var fs=require("fs");

http.createServer(function(req,res){
    var form = new formidable.IncomingForm();
    // form.uploadDir = "./upload";
    form.parse(req, function(err, fields, files) {
        console.log(err, fields, files)
        // fs.readFile()
    });
}).listen(9000)
