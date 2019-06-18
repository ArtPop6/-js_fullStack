var GameOver = (function(_super){
    function GameOver(){
        GameOver.super(this);
        this.restartBtn.on(Laya.Event.CLICK, this, this.restartGame);
    }

    Laya.class(GameOver, "GameOver", _super);

    var _proto = GameOver.prototype;

    _proto.restartGame = function(){
        // 移出自己
        this.removeSelf();
        LayaSample.game.removeSelf();
        Laya.stage.addChild(LayaSample.gameStart);
    };

    // 设置分数的显示
    _proto.setScoreUI = function(score){
        // 计算分数
        this.data = {};
        this.temp = score; // 总分
        // 循环赋值
        for(var i=9; i>=0; i--) {
            this.data["item"+i] = {index: Math.floor(this.temp%10)};
            this.temp/=10;
        }
        this.scoreNums.dataSource = this.data;
    }

    return GameOver;
})(ui.GameOverUI);