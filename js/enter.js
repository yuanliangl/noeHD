// 登入页面js

$("#userName").focus(function () {
    $(this).attr("placeholder", "");
});
// 注册请求
$("#enter_dr").click(function () {
    $.post(
        "./php/checkEnter.php",
        { "username": $("#userName").val(), "userpass": $("#userPass").val() },
        function show(str) {
            if (str == "1") {
                // 获取当前时间
                let s = new Date();
                // 设置保存时间
                s.setDate(s.getDate() + 10);
                // cookie
                document.cookie = "username=" + $("#userName").val() + ";expires=" + s.toGMTString();
                $(".hint").css({ "background": "blur", "display": "block" }).html("<a href='homepage.html'>登入成功,点击登入</a>");
            } else if (str == "0") {
                $(".hint").html("登入失败，用户名或密码错误").css({ "display": "block" });
            } else {
                $(".hint").html("登入失败，服务器走丢了").css({ "display": "block" });
            }
        }
    )
});


