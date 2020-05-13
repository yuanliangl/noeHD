var swh = [0, 0, 0, 0];
var sum = 0;
// 点击滑动
{
    $("#username,#userIphone,#userpass,#topass,#userCode").click(function () {
        $(this).next().animate({ left: '-80px' })
    });
}
// 正则判断绑定事件
{
    $("#username").blur(function () {
        isName();
        ischeckName();
    })

    $("#userIphone").blur(function () {
        isIphone();
    })

    $("#userpass").blur(function () {
        isPass();
    })

    $("#topass").blur(function () {
        isTopass();
    })
}
// 正则验证
{
    //用户名
    function isName() {
        // 4-20位字符，可由中文、英文、数字或符号“_”组成
        var ret = /[\u4e00-\u9fa5a-zA-Z0-9\-]{4,20}/
        if (ret.test($("#username").val())) {
            swh[0] = 1;
            $("#name_tx").text("√").css({ "color": "blue", "display": "block", "line-height": "52px" })
        } else {
            swh[0] = 0;
            $("#name_tx").text("请输入正确的用户名,用户名应为4-20位字符").css({ "color": "red", "display": "block" })
        }
    }
    // 手机号
    function isIphone() {
        // 手机号
        var ret = /^[1]([3-9])[0-9]{9}$/
        if (ret.test($("#userIphone").val())) {
            swh[1] = 1;
            $("#userIphone").nextAll().eq(1).text("√").css({ "color": "blue", "display": "block", "line-height": "52px" })
        } else {
            swh[1] = 0;
            $("#userIphone").nextAll().eq(1).text("格式错误，请输入正确的手机号码").css({ "color": "red", "display": "block" })
        }
    }

    // 注册密码
    function isPass() {
        // 6-20位的组合
        var ret = /^[\da-zA-Z]{6,20}$/
        if (ret.test($("#userpass").val())) {
            swh[2] = 1;
            $("#userpass").nextAll().eq(1).text("√").css({ "color": "blue", "display": "block", "line-height": "52px" })
        } else {
            swh[2] = 0;
            $("#userpass").nextAll().eq(1).text("请输入正确的密码").css({ "color": "red", "display": "block" })
        }
    }
    function isTopass() {
        var ret = /^[\da-zA-Z]{6,20}$/
        if (ret.test($("#topass").val())) {
            swh[3] = 1;
            $("#topass").nextAll().eq(1).text("√").css({ "color": "blue", "display": "block", "line-height": "52px" })
        } else {
            swh[3] = 0;
            $("#topass").nextAll().eq(1).text("请输入正确的密码").css({ "color": "red", "display": "block" });
            return;
        };
        if ($("#userpass").val() == $("#topass").val()) {
            swh[3] = 1;
            $("#topass").nextAll().eq(1).text("√").css({ "color": "blue", "display": "block" })
        } else {
            wh[3] = 0;
            $("#topass").nextAll().eq(1).text("两次密码不一致").css({ "color": "blue", "display": "block", "line-height": "52px" })
        }
    }
}
// ajax请求
{
    // 验证用户名是否重复
    function ischeckName() {
        $.get(
            "./php/checkName.php",
            { "username": $("#username").val() },
            (str) => {
                if (str == "1") {
                    $("#name_tx").text("该用户名已经注册，请重新填写").css({ "color": "red", "display": "block" })
                } else if (str == "0") {
                    $("#name_tx").text("√").css({ "color": "blue", "display": "block" })
                }
            }
        )
    }
    // 注册请求

    $("#zc").click(function (event) {
        // 信息不全阻止注册
        var sun = 0;
        swh.forEach(function (itme) {
            sun += itme;
        });
        console.log(sun);
        if (sum == 4) {
        } else {
            // 阻止事件(阻止提交)
            let e = event || window.event;
            e.preventDefault();
        };
        $.post("./php/checkEnroll.php", { "username": $("#username").val(), "userpass": $("#userpass").val() },
            function (str) {
                if (str == "1") {
                    $(".enroll_tag").html("<a href='enter.html'>注册成功,点击登入</a>").css({ "background": "pink", "color": "#fff" })
                } else if (str == "0") {
                    $(".enroll_tag").html("注册失败，请重新注册").css({ "background": "red", "color": "#fff" })
                }
            }
        )
    })
}
