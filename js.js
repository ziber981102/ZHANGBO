function  a() {
    window.location.href = "one.html";
}
function ax(){
    var account = encodeURIComponent(document.querySelector("#L_account").value);
    var password = encodeURIComponent(document.querySelector("#L_pwd").value);

//第一步创建对象
    var xhr = new XMLHttpRequest();
    //第二部建立于服务端的连接get  post
    xhr.open('post','https://mockapi.eolinker.com/2ZhGVxjacb39010e6753bd9c02ee803e6e3bfeab6e8007c/login');
    //设置头信息，数据以表单的形式传输数据给服务器
xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
//发送请求
    xhr.send("username="+account+"&pwd="+password);
//接收服务端返回的数据
xhr.onreadystatechange = function () {
    if(xhr.readyState ==  4 && xhr.status== 200){
        var  res = JSON.parse(xhr.responseText);
        var str =res.data;
        if (str=="登录成功"){
            window.localStorage.setItem("account",account);//存储数据
            location.href="DropleService.html";
        }else{
            alert("账号或者密码错误");
        }

    }


}


}

function exit1() {
    location.href="login.html"
}
