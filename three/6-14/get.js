var https = require("https");
var http = require("http");

var cheerio = require("cheerio");

var url = "https://www.lagou.com/";

http.createServer(function(req,res){
    https.get(url, function (response) {
        var str = "";
        response.on("data", function (data) {
            str += data;
        })
        response.on("end", function () {
            var $ = cheerio.load(str);
            var box = $(".menu_box");
            var all=[]
            box.each(function () {
                var title = $(this).find("h2").text().trim();
                var a = $(this).find("a");
                a.each(function () {
                    var atxt = $(this).text();
                    var ahref = $(this).attr("href");
                })
            })
        })
    })
    res.end("ddd")
}).listen(9000)

console.log("开启服务器")