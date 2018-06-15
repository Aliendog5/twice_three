function firsttest(str){
    var arr=str.split("&");
    var json={};
    for(let i=0;i<arr.length;i++){
       var arr1= arr[i].split("=");
       json[arr1[0]]=arr1[1];     
    }
    return json;
}
module.exports=firsttest;