/*
* name;
*/
var Game = (function (_super) {
    function Game() {
        this.moles = new Array;
        this.moleNum = 9;
        Game.super(this);

        // 击中的回调函数
        this.hitCallBackHd = Laya.Handler.create(this, this.setScore, null, false);

        for(var i = 0; i < this.moleNum; i ++) {
            this.box = this.getChildByName("item"+i);
            this.mole = new Mole(this.box.getChildByName("normal"), this.box.getChildByName("hit"), 16, this.hitCallBackHd, this.box.getChildByName("scoreImg"));
            this.moles.push(this.mole);
        }

        // 调用小锤子
        this.hammer = new Hammer();
        // 把小锤子添加到舞台
        this.addChild(this.hammer);
        // 隐藏小锤子
        this.hammer.visible = false;
    }

    // 注册类
    Laya.class(Game,"Game",_super);

    var _proto = Game.prototype;

    _proto.onLoop = function(){
        // 进度条递减(结束时间:分钟)
        this.timeBar.value-=(1/10);
        // 判断是否结束
        if(this.timeBar.value <= 0){
            this.gameOver();
            return;
        } 
        // 每隔两秒显示一次
        // 显示到舞台上
        // this.mole.show();
        this.index = Math.floor(Math.random() * this.moleNum);
        this.moles[this.index].show();

    };

    // 重复执行
    _proto.gameStart = function(){
        // 设置进度条的初始值
        this.timeBar.value = 1;
        // 存储等分
        this.score = 0;
        // 显示进度条UI
        this.updateScoreUI();
        // 显示小锤子
        this.hammer.visible = true;
        // 开始使用小锤子
        this.hammer.start();
        // 重复循环事件
        Laya.timer.loop(1000, this, this.onLoop);
    };

    // 游戏结束
    _proto.gameOver = function(){
        // 结束定时器循环(清理定时器)
        Laya.timer.clear(this, this.onLoop);
        // 游戏结束时隐藏小锤子
        this.hammer.visible = false;
        // 结束小锤子
        this.hammer.end();
        // 游戏结束界面
        // console.log("游戏结束!");
        // 把结束的实例化到舞台上
        // 判断游戏中是不是有这个类(结束类)
        if ( !LayaSample.gameOver ) {
            LayaSample.gameOver = new GameOver();
        }
        // 结束界面的中间位置
        LayaSample.gameOver.centerX = 0; // 中间
        LayaSample.gameOver.centerY = 40;
        // 游戏结束时把分数传递进来
        LayaSample.gameOver.setScoreUI(this.score);
        // 添加到舞台上
        Laya.stage.addChild(LayaSample.gameOver);
    }

    // 计分
    _proto.setScore = function(type){
        // 根据类型判断是加分还是减分
        this.score+=(type==1?-100:100);
        // 如果当前分数为0分时，显示还是0分
        if(this.score <= 0){
            this.score = 0;
        }
        // 显示到舞台上(更新分数功能)
        this.updateScoreUI();
    };

    // 更新分数
    _proto.updateScoreUI = function(){
        this.data = {};
        this.temp = this.score; // 总分
        // 循环赋值
        for(var i=9; i>=0; i--) {
            this.data["item"+i] = {index: Math.floor(this.temp%10)};
            this.temp/=10;
        }
        this.scoreNums.dataSource = this.data;
    };

    return Game;
})(ui.GameUI);