<?php

//根据请求参数中的username和password对象的值来注册用户
$username = $_REQUEST['un'];
$password = $_REQUEST['pw'];

//1 连接数据库
$conn = mysqli_connect('localhost','root','root','new','3306');
//2 判断数据库是连接错误
if(mysqli_connect_error()){
	die('数据库连接出错!');
}
//书写SQL语句
$insert = "INSERT INTO info (username,password) VALUES ('$username','$password')";
//执行SQL语句
$result = mysqli_query($conn,$insert);

//根据结果判断是否注册成功
if($result){
	echo "1";
}else{
	echo "0";
}
?>