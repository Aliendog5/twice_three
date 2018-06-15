//qs--->querystring

var qs=require("querystring");
// var str="name=aaa&pass=123";
// console.log(qs.parse(str));
// console.log(qs.stringify(qs.parse(str)));
// console.log(qs.escape(str));
// console.log(qs.unescape(qs.escape(str)))

//url

var modurl=require("url");
var url="http://www.baidu.com:80/index.html?username=aaa#page3";
var str=modurl.parse(url)
// console.log(str);
// console.log("-------------------------------")
// console.log(str.query);
// console.log(str.hash);//#page3
console.log(modurl.format(str));//http://www.baidu.com:80/index.html?username=aaa#page3

// URLSearchParams

console.log(modurl.URLSearchParams);// [Function: URLSearchParams]
var params = new modurl.URLSearchParams('https://example.org/?abc=123');
params.append("useraname","aaaa");
params.append("password","123");
params.delete("abc=123");//没起作用
params.set("age","18");

// https://example.org/?abc=123&useraname=aaaa&password=123&age=18
console.log(qs.unescape(params));