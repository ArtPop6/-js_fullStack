//游戏继续方法
function game_jx() {

    //继续游戏进行时
    var jxGame_timming = new Date();

    //重新计算倒计时
    djs_data = jxGame_sc - parseInt((jxGame_timming - jxGame_startTime) / 1000);
    djs_span.innerHTML = djs_data;
    zongfen = df;
    if (djs_data < 1) {
        console.log(df);
        if(df>5500||df==5500){document.getElementsByClassName("audio")[3].pause();
            document.getElementsByClassName("audio")[1].play();
            document.getElementsByClassName("success")[0].style.display = "block";
            document.getElementsByClassName("score")[0].style.display = "none";
            console.log("成功总分" + zongfen);
            document.getElementsByClassName("fenshu")[0].innerHTML = zongfen;
            //----------------------------------------------------

            var date = new Date();
            var expireDays = 365; //将date设置为365天以后的时间
            date.setTime(date.getTime() + expireDays * 24 * 3600 * 1000); //将cookie设置为365天后过期
            //把通关时间存储到cookie中，期限为一年
            var strCookie = document.cookie;//获取cookie
            var arrCookie = strCookie.split(";");//把cookie分成数组
            for(var i=0;i<arrCookie.length;i++){
                var arr=arrCookie[i].split("=");
                if(parseInt(arr[0])==key){
                    if(parseInt(arr[1])<zongfen){
                        document.cookie = key + "=" + zongfen+";expires=" + date.toGMTString();
                    }
                }else {
                    document.cookie = key + "=" + arr[1]+";expires=" + date.toGMTString();
                }

            }
            //------------------------------------------------
            return;
        }else {document.getElementsByClassName("audio")[3].pause();
            document.getElementsByClassName("audio")[2].play();
            document.getElementsByClassName("failure")[0].style.display = "block";
            document.getElementsByClassName("score")[0].style.display = "none";
            console.log("失败总分" + zongfen);
            document.getElementsByClassName("fenshu")[1].innerHTML = zongfen;
            return;
        }

    }

    jxDJS_id = setTimeout("game_jx()", 1000);

}
//地鼠出现方法
function mouse_show(tl_time, jg_time) {
    //生成随机的数组下标
    var i = parseInt(Math.random() * imgs.length);
    //随机改变图片
    imgs[i].src = "img/mouse1.png";

    //地鼠出现间隔
    jg_id = setTimeout("mouse_show(1,1.5)", jg_time * 1000);
    //地鼠停留时间
    tl_id = setTimeout("mouse_hide(" + i + ")", tl_time * 1000);

}

function djs(sc_time, xzdf) {
    //实时记录游戏时间
    var game_time = new Date();
    //计算倒计时
    djs_data = sc_time - parseInt((game_time - start_Time) / 1000);
    // console.log(parseInt(sc_time)-parseInt((game_time - start_Time)/1000));
    if (djs_data < 1) {
        djs_data = 0;
    }
    //显示倒计时
    djs_span.innerHTML = djs_data;
    if (djs_data < 1) {

        // alert("游戏结束");
        // game_over();
        // return;
        console.log("2222");
        zongfen = df;
        if (df > xzdf || df == xzdf) {document.getElementsByClassName("audio")[3].pause();
            document.getElementsByClassName("audio")[1].play();
            document.getElementsByClassName("success")[0].style.display = "block";
            document.getElementsByClassName("score")[0].style.display = "none";
            console.log("成功总分" + zongfen);
            document.getElementsByClassName("fenshu")[0].innerHTML = zongfen;
            //----------------------------------------------------

            var date = new Date();
            var expireDays = 365; //将date设置为365天以后的时间
            date.setTime(date.getTime() + expireDays * 24 * 3600 * 1000); //将cookie设置为365天后过期
            //把通关时间存储到cookie中，期限为一年
            var strCookie = document.cookie;//获取cookie
            var arrCookie = strCookie.split(";");//把cookie分成数组
            for(var i=0;i<arrCookie.length;i++){
                var arr=arrCookie[i].split("=");
                if(parseInt(arr[0])==key){
                    if(parseInt(arr[1])<zongfen){
                        document.cookie = key + "=" + zongfen+";expires=" + date.toGMTString();
                    }
                }else {
                    document.cookie = key + "=" + arr[1]+";expires=" + date.toGMTString();
                }

            }
            //------------------------------------------------
            return;
        } else {document.getElementsByClassName("audio")[3].pause();
            document.getElementsByClassName("audio")[2].play();
            document.getElementsByClassName("failure")[0].style.display = "block";
            document.getElementsByClassName("score")[0].style.display = "none";
            console.log("失败总分" + zongfen);
            document.getElementsByClassName("fenshu")[1].innerHTML = zongfen;
            return;
        }
        console.log("总分" + zongfen);
    }

    //倒计时的计时器
    djs_id = setTimeout(function () {
        djs(110, 5500);
    }, 1000);
}

window.onload = function () {
    djs_span = document.getElementById("djs");
    df_span = document.getElementById("defen");
    ksBtn = document.getElementById("ksBtn");
    ztBtn = document.getElementById("ztBtn");
    tzBtn = document.getElementById("tzBtn");
    imgs = document.images;
    zt_div = document.getElementById("zt_div");

    // 获取鼠标位置
    document.onmousemove = function (ev) {
        var x = ev.pageX;
        var y = ev.pageY;
        var game_divX = document.getElementById("game_div").offsetLeft;
        var game_divY = document.getElementById("game_div").offsetTop;
        document.getElementsByClassName("hammer")[0].style.left = x - 20 - game_divX + "px";
        document.getElementsByClassName("hammer")[0].style.top = y - 60 - game_divY + "px";
    };
    //锤子动画
    document.onclick = function () {
        document.getElementsByClassName("audio")[0].play();
        document.getElementsByClassName("hammer")[0].style.animationPlayState = "running";
        setTimeout(function () {
            document.getElementsByClassName("hammer")[0].style.animationPlayState = "paused";
        }, 300);
    };

    //游戏开始事件
    ksBtn.onclick = function () {
        document.getElementsByClassName("star")[0].style.display = "none";
        document.getElementsByClassName("restar")[0].style.display = "block";
        document.getElementsByClassName("zanting")[0].style.display = "block";
        //设置第一次开始游戏
        isOneStart = true;

        //记录游戏开始时间
        start_Time = new Date();

        //执行倒计时方法
        djs(110, 5500);
        //执行地鼠出现的方法 tl_time:停留时间,jg_time:间隔时间
        mouse_show(1, 1.5);

        //禁止用户操作输入框
        isStart = true;
        jinzhi();

    };
    //游戏暂停事件
    ztBtn.onclick = function () {
        if (isZT) {
            //继续游戏
            isOneStart = false;
            zt_div.style.display = "none";
            ztBtn.textContent = "暂停游戏";
            isZT = false;

            //继续游戏开始的时间
            jxGame_startTime = new Date();
            game_jx();
            //执行地鼠出现的方法
            qingchang();
            mouse_show(1, 1.5);

            //禁止用户操作输入框
            jinzhi();

        } else {
            //暂停游戏

            game_zt();
        }
    };
    //重新开始
    document.getElementsByClassName("restar")[0].onclick = function () {
        setTimeout(function () {
            window.location.href = window.document.location.href;
        }, 500);
    };
    //返回主菜单
    document.getElementsByClassName("return")[0].onclick = function () {
        setTimeout(function () {
            window.open("checkpoint.html", "_parent");
        }, 500);
    };
    //成功后重新开始
    document.getElementsByClassName("restar")[1].onclick = function () {
        setTimeout(function () {
            window.location.href = window.document.location.href;
        }, 500);
    };
    //成功后返回主菜单
    document.getElementsByClassName("return")[1].onclick = function () {
        setTimeout(function () {
            window.open("checkpoint.html", "_parent");
        }, 500);
    };
    //成功后下一关
    document.getElementsByClassName("next")[0].onclick=function () {
        setTimeout(function () {
            parseInt(key) + 1 == 26 ? window.open("checkpoint.html", "_parent") : window.open(parseInt(key) + 1 + ".html", "_parent");
        }, 500);
    };
    //失败后重新开始
    document.getElementsByClassName("restar")[2].onclick = function () {
        setTimeout(function () {
            window.location.href = window.document.location.href;
        }, 500);
    };
    //失败后返回主菜单
    document.getElementsByClassName("return")[2].onclick = function () {
        setTimeout(function () {
            window.open("checkpoint.html", "_parent");
        }, 500);
    };
};