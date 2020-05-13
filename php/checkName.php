<?php
header("content-type:text/html;charset=utf-8");
// 接收前端数据
$name = $_GET['username'];
// 连接数据库
$conn = mysqli_connect("localhost","root","root","shoppingcenter");
// 执行sql语句
$result = mysqli_query($conn, "select * from regedit where username='{$name}'");
// 关闭数据库
mysqli_close($conn);

// 响应结果
$arr = mysqli_fetch_all($result, MYSQL_ASSOC);
if(count($arr)==1){
    echo "1";
}else{
    echo "0";
}

?>