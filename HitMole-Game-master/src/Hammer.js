/**
 * 鼠标类
 */
var Hammer = (function(_super){

    function Hammer(){
        Hammer.super(this);
    }

    Laya.class(Hammer, "Hammer", _super);

    var _proto = Hammer.prototype;

    // 开始使用
    _proto.start = function(){
        // 隐藏鼠标
        Laya.Mouse.hide();
        // 给舞台添加两个事件
        Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
        Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove);
        // 进来时就进入移动的状态（把中心置于小锤子的位置）
        this.onMouseMove();
    };

    // 结束使用
    _proto.end = function(){
        // 显示鼠标
        Laya.Mouse.show();
        // 关闭事件
        Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
        Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.onMouseMove);
    };

    // 鼠标点击事件
    _proto.onMouseDown = function(){
        // 点击时就播放动画
        this.hit.play(0, false);
    };

     //  鼠标移动事件
    _proto.onMouseMove = function(){
        this.pos(Laya.stage.mouseX - this.width/2, Laya.stage.mouseY - this.height/3);
    };

    return Hammer;
})(ui.HammerUI);