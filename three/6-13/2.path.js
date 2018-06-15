var path=require("path");

var url="C:\\wamp\\www\\sfbest\\server\\reg.php"
// console.log(path.basename(url));// reg.php

// console.log(path.dirname(url));// C:\wamp\www\sfbest\server
// console.log(path.extname(url));// .php 后缀名
// console.log(path.parse(url));//以下
/*
    { root: 'C:\\',
    dir: 'C:\\wamp\\www\\sfbest\\server',
    base: 'reg.php',
    ext: '.php',
    name: 'reg' }
*/
// console.log(path.resolve(url));//显示完整路径
// console.log(path.relative(url,"C:\\wamp\\www"));//..\..\..

// console.log(path.format({
//     root: '/ignored',
//     dir: '/home/user/dir',
//     base: 'file.txt'
//   }));//  /home/user/dir\file.txt
// 如果提供了 `dir`、`root` 和 `base`，则返回 `${dir}${path.sep}${base}`。
// `root` 会被忽略。

//提供平台特定的路径分隔符：Windows 上是 ;
// console.log(path.delimiter);//;
// console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '../../'));
// \foo\bar\baz\
