/*
* name;
*/
var Mole = (function () {
    function Mole(normalState, hitState, downY, hitCallBackHd, scoreImg) {
        this.normalState = normalState;
        this.hitState = hitState;
        this.downY = downY;  // 最低点
        this.upY = this.normalState.y;  // 最高点
        this.hitCallBackHd = hitCallBackHd; // 计分
        this.scoreImg = scoreImg; // 飘字
        this.scoreY = this.scoreImg.y; // 记录飘字的Y点
        this.reset();
        // 给常态图添加事件(受击事件)
        this.normalState.on(Laya.Event.CLICK, this, this.hit);

    };
    var _proto = Mole.prototype;

    // 重置
    _proto.reset = function(){
        this.normalState.visible = false;
        this.hitState.visible = false;
        // 飘字消失
        this.scoreImg.visible = false;
        // 是否激活状态
        this.isVctive = false;
        // 是否显示
        this.isShow = false;
        // 是否隐藏
        this.isHit = false;
    }

    // 显示
    _proto.show = function(){
        // 判断是否是激活状态
        if(this.isVctive) {
            return;
        }

        this.isVctive = true;
        this.isShow = true;
        // 显示不同地鼠的类型(随机出现)
        this.type = Math.random()<0.3?1:2;
        // 替换不同的皮肤
        // 常态图
        this.normalState.skin = "ui/mouse_normal_"+ this.type + ".png";
        // 受击图
        this.hitState.skin = "ui/mouse_hit_"+ this.type + ".png";
        // 替换飘字皮肤
        this.scoreImg.skin = "ui/score_"+ this.type + ".png";
        // 常态图让其缓缓的向上移动
        // 让常态图设置为最低点
        this.normalState.y = this.downY;
        // 显示出来
        this.normalState.visible = true;
        // 效果
        Laya.Tween.to(this.normalState,{y:this.upY},500, Laya.Ease.backOut, Laya.Handler.create(this, this.showComplete));
    }

    // 停留
    _proto.showComplete = function(){
        // 判断是否是显示状态或者受击状态
        if (this.isShow && !this.isHit ) {
            // 定时执行
            Laya.timer.once(2000, this, this.hide);
        }
    }

    // 消失
    _proto.hide = function(){
        // 判断是否显示
        if (this.isShow && !this.isHit) {
            this.isShow = false;
            Laya.Tween.to(this.normalState, {y:this.downY}, 300, Laya.Ease.backIn, Laya.Handler.create(this, this.reset));
        }

    }

    // 受击
    _proto.hit = function(){
        // 判断是否显示
        if (this.isShow && !this.isHit) {
            this.isShow = true;
            this.isHit = true;
            // 设置常态图为不显示
            this.normalState.visible = false;
            // 设置受击图显示出来
            this.hitState.visible = true;
            // 根据不同的状态计算分数
            this.hitCallBackHd.runWith(this.type);
            // 清除定时器
            Laya.timer.clear(this, this.hide);
            // 重置
            Laya.timer.once(500,this, this.reset);
            // 受击飘字效果
            this.showScore();
        }
    }
        
    // 受击飘字效果
    _proto.showScore = function(){
        // 改变飘字的Y值
        this.scoreImg.y = this.scoreY + 30;
        // 飘字的缩放
        this.scoreImg.scale(0, 0);
        // 显示出飘字图片
        this.scoreImg.visible = true;
        // 缓动效果
        Laya.Tween.to(this.scoreImg, {y: this.scoreY, scaleX: 1, scaleY: 1}, 300, Laya.Ease.backInOut);
    }

    return Mole;
})();