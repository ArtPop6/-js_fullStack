(function(){
    (function(LayaSample){
        // 初始化引擎
        Laya.init(800,600);
        // 屏幕适配(缩放)
        Laya.stage.scaleMode = Laya.Stage.SCALE_NOSCALE;
        // 屏幕适配（水平居中）
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        // 屏幕适配（垂直居中）
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        // 屏幕适配（屏幕模式）
        Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
        // 设置satge背景色
        Laya.stage.bgColor = "#ffcccc";
        // 加载资源
        Laya.loader.load("res/atlas/ui.json",Laya.Handler.create(this, onLoaded),null,Laya.Loader.ATLAS);
    })();

    function onLoaded() {
        // var game = new Game();
        // Laya.stage.addChild(game);
        LayaSample.gameStart = new GameStart();
        Laya.stage.addChild(LayaSample.gameStart);
    }
})(window.LayaSample || (window.LayaSample = {}));