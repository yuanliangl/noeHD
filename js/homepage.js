// 轮播
class lunbo {
    constructor(DOM, obj) {
        // dom相关元素
//
        this.$box = $(DOM);
        this.$imgBox = this.$box.find(".img-box");
        this.$img = this.$imgBox.children();
        this.$li = this.$box.find("li");
        this.$a = this.$box.find("a");
        // 数据相关
        let width = this.$box.width();
        let height = this.$box.height();
        let defaultObj = {
            width: width,
            height: height,

            ord: 0,
            timeLong: 3000,
            type: "opacity",//效果
            hrefs: [],
            myTimer: null
        }
        // 赋值
        if (obj) {
            for (let key in obj) {
                defaultObj[key] = obj[key];
            }
        }
        for (let key in defaultObj) {
            this[key] = defaultObj[key];
        }
        this.autoPlay()
        this.addEvent()
    }
    // 跳转图片
    goImg(transOrd) {
        if (this.ord == transOrd) {
            return;
        }
        let outOrd = this.ord;
        this.ord = transOrd;
        if (this.ord > this.$img.length - 1) {
            this.ord = 0;
        } else if (this.ord < 0) {
            this.ord = this.$img.length - 1;
        }
        // 外观
        this.$img.eq(outOrd).animate({ "opacity": 0 }, this.timeLong / 3);
        this.$img.eq(this.ord).css({ "opacity": 0 });
        this.$img.eq(this.ord).animate({ "opacity": 1 }, this.timeLong / 3);

        this.$a.eq(outOrd).css({ "color": "#000" });
        this.$a.eq(this.ord).css({ "color": "#fcfcfc" });
        this.$li.eq(outOrd).css({ "background": "#aaa6a6" });
        this.$li.eq(this.ord).css({ "background": "#222" });

    }
    // 自动播放
    autoPlay() {
        this.myTimer = setInterval(() => {
            this.goImg(this.ord + 1);
        }, this.timeLong);
    }
    // 停止播放
    stopPlay() {
        window.clearInterval(this.myTimer);
        this.myTimer = null;
    }
    addEvent() {
        // 块部分
        this.$li.mouseover((event) => {
            this.stopPlay();
            this.goImg($(event.target).index());
        });
        this.$li.mouseout(() => {
            this.autoPlay();
        });

        // 超链
        this.$imgBox.click(() => {
            this.hrefs[this.ord] && window.open(this.hrefs[this.ord]);
        });
    }


}
$(function () {
    new lunbo(".lunbo-wrap", {
        "hrefs": [
            "https://pro-pc.yhd.com/yhd/active/18yRuDsxNvCjkbQFMaJ6CML52yD/index.html",
            "https://pro-pc.yhd.com/yhd/active/3K1CBRbr7sB46LvjEXMJfu6QadnU/index.html",
            "https://pro-pc.yhd.com/yhd/active/2Q39QCzXJCw56iKwbN8kwEVuBa5G/index.html",
        ]
    });
});
//类目菜单
$(".kind_box").mouseover(() => {
    $(".kind_boxno").css({ "display": "block" });
});
$(".kind_box").mouseout(() => {
    $(".kind_boxno").css({ "display": "none" });
});

