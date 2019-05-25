var djs_span, df_span, ksBtn, ztBtn, tzBtn,zongfen,xzdf,vals;
var imgs;
var djs_id, jg_id, tl_id, play_id;
var isStart;//判断是否开始，游戏开始为true，游戏暂停为false
var isZT = false;//是否为暂停
var djs_data;//倒计时的时间
var jxGame_sc;//继续游戏的总时长
var isOneStart = true;//判断是否为第一次开始
var dz = 0, ld = 0, df = 0;//游戏计分
var name = window.document.location.pathname.split("/");
var nam = name.toString().split(",");
var key;//当前网页名称的整数，如1.html就获取1。
var strCookie = document.cookie;//获取cookie
var arrCookie = strCookie.split(";");//把cookie分成数组
console.log(nam);
for (var i = 0; i < nam.length; i++) {
    nam[i].indexOf(".html") != -1 ? key = nam[i].split(".html")[0] : "";
}

//tl_time:停留时间,jg_time:间隔时间,sc_time：游戏时长,xzdf:限制总分
//倒计时方法

//游戏暂停方法
function game_zt() {
    clearTimeout(djs_id);
    clearTimeout(jg_id);
    clearTimeout(tl_id);
    if (!isOneStart) {
        clearTimeout(jxDJS_id);
    }
    zt_div.style.display = "block";
    ztBtn.textContent = "继续游戏";
    isZT = true;
    //获取倒计时，作为继续游戏的总时长
    jxGame_sc = djs_data;
}


//游戏结束
function game_over() {
    clearTimeout(tl_id);
    clearTimeout(jg_id);
    clearTimeout(djs_id);
    clearTimeout(play_id);
    if (!isOneStart) {
        clearTimeout(jxDJS_id);
    }
    isStart = false;
    djs_span.innerHTML = 0;

    //恢复游戏场地
    zt_div.style.display = "none";

    //地鼠清场
    qingchang();

}

//地鼠清场
function qingchang() {
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].src = "img/burrow.png";
    }
}

//地鼠消失，没打中
function mouse_hide(i) {

    var name = imgs[i].src.substr(imgs[i].src.length - 5, 1);

    if (name == 1) {
        imgs[i].src = "img/burrow.png";

        //计分
        ld++;
        df=df-60;
        if (df <= 0) {
            df = 0;
        }
        // df_span.innerHTML = "打中" + dz + "只，漏掉" + ld + "只，得分" + df;
        df_span.innerHTML =df;
    }


}

//打中地鼠
function play(obj) {

    //获取图片的名称
    var name = obj.src.substr(obj.src.length - 5, 1);

    if (name == 1) {
        document.getElementsByClassName("audio")[4].currentTime="0";
        document.getElementsByClassName("audio")[4].play();
        obj.src = "img/mouse2.png";

        //计分
        dz++;
        df += 120;
        // df_span.innerHTML = "打中" + dz + "只，漏掉" + ld + "只，得分" + df;
        df_span.innerHTML =df;

        //打中后还原
        play_id = setTimeout(function () {
            obj.src = "img/burrow.png";
            //  clearTimeout(tl_id);
        }, 500);

    }

}

//禁止用户操作方法
function jinzhi() {
    if (isStart) {
        ksBtn.disabled = true;
    } else {
        ksBtn.disabled = false;
    }
}