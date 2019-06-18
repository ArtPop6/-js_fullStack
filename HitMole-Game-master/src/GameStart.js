var GameStart = (function(_super){
    function GameStart(){
        GameStart.super(this);
        // 注册点击事件
        this.startBtn.on(Laya.Event.CLICK,this,this.onStartGame);
    }

    Laya.class(GameStart, "GameStart", _super);

    var _proto = GameStart.prototype;

    _proto.onStartGame = function(){
        // 移出一下自己(移出登录界面，进入游戏界面);
        this.removeSelf();
        // 判断是否有游戏类了
        if(!LayaSample.game){
            LayaSample.game = new Game();
        };

        // 调用
        LayaSample.game.gameStart();

        // 添加到舞台上
        Laya.stage.addChild(LayaSample.game);
    };


    return GameStart;
})(ui.GameStartUI);