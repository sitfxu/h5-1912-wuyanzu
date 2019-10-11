<?php

	$username = $_POST['un'];//用户名
	$password = $_POST['pw'];//密码

//连接数据库的固定步骤
//连接数据库
$conn = mysqli_connect('localhost','root','root','new',3306);
//判断数据库连接是否出错
if(mysqli_connect_error()){
	die('fail');
}
//书写SQL语句
$query = "SELECT * FROM info WHERE username='$username' AND password='$password'";

//执行SQL语句
$result = mysqli_query($conn,$query);
$row = mysqli_num_rows($result);
if($row>0){	
	//只要有结果,说明有这个用户
	// $data = array("code"=>1);
	echo "1";
}else{
	// $data = array("code"=>0);
	echo "0";
}
?>