window.onload = function(){
	//获取相关元素
	var unInp = document.getElementById('username');
	var pwInp = document.getElementById('password');
	var submitBtn = document.getElementById('submit');//提交按钮
	//点击提交按钮,不跳页面,通过ajax把用户信息提交后台
	submitBtn.onclick = function(){
		//2 通过ajax来验证用户是否存在
		var xhr = new XMLHttpRequest();
		xhr.open('post','./login.php');
		xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		xhr.send('un='+unInp.value+'&pw='+pwInp.value);
		xhr.onload = function(){
			//如果存在,就显示欢迎界面,同时隐藏登陆表单
			var json = xhr.responseText;
			if(json==1){//如果code是1
				window.open("./loginSuccess.html")
			}else{
				window.open("./loginFail.html")
			}
		}
	}
}
