window.onload = function(){
    //获取相关元素
    var unInp = document.getElementById('username');
    var pwInp = document.getElementById('password');
    var submitBtn = document.getElementById('submit');//提交按钮
    //点击提交按钮,不跳页面,通过ajax把用户信息提交后台
    submitBtn.onclick = function(){
        var xhr = new XMLHttpRequest();
        xhr.open('post','./register.php');
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        xhr.send('un='+unInp.value+'&pw='+pwInp.value);
        xhr.onload = function(){
            // console.log(xhr.response)
            //如果成功注册
            var json = xhr.responseText;
          
            if(json==1){//如果code是1
                location.href="./registerSuccess.html";
            }else{
                location.href="./loginFail.html";
            }
        }
    }
}
