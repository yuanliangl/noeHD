<?php
    header("content-type:text/html;charset=utf-8");
    $name = $_POST['username'];
    $pass = $_POST['userpass'];

    // 连接数据库
    $conn = mysqli_connect("localhost","root","root","shoppingcenter");
    // 执行sql语句
    $result = mysqli_query($conn,"insert into regedit(userpass,username) value ('".$pass."','".$name."')");
    // 关闭数据库
    mysqli_close($conn);
    //响应
    if($result){
        echo "1"; //1 表示注册成功
    }else{
        echo "0"; //0 表示注册失败
    }
?>