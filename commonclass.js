function RequsetMethod(part1, part2, part3, callback){

//第一步创建对象
    var xhr = new XMLHttpRequest();
    //第二部建立于服务端的连接get  post
    xhr.open(part1,'https://mockapi.eolinker.com/2ZhGVxjacb39010e6753bd9c02ee803e6e3bfeab6e8007c/'+part2);
    //设置头信息，数据以表单的形式传输数据给服务器
    xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
//发送请求
    xhr.send(part3);
//接收服务端返回的数据
    xhr.onreadystatechange = function () {
        if(xhr.readyState ==  4 && xhr.status== 200){
            var  res = JSON.parse(xhr.responseText);
            var str =res.data;
             callback(str);


    }
}

}