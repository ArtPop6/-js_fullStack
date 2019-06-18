var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var GameUI=(function(_super){
		function GameUI(){
			
		    this.scoreNums=null;
		    this.timeBar=null;

			GameUI.__super.call(this);
		}

		CLASS$(GameUI,'ui.GameUI',_super);
		var __proto__=GameUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameUI.uiView);
		}

		STATICATTR$(GameUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"width":800,"height":600},"child":[{"type":"Image","props":{"y":25,"x":25,"skin":"ui/back.png"}},{"type":"Box","props":{"y":197,"x":155,"name":"item0"},"child":[{"type":"Image","props":{"y":-3,"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":11,"x":6,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":78,"skin":"ui/mask-01.png"}},{"type":"Image","props":{"y":15,"x":62,"width":86,"skin":"ui/score_2.png","name":"scoreImg","height":30,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":197,"x":342,"name":"item1"},"child":[{"type":"Image","props":{"y":-3,"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":11,"x":6,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":78,"skin":"ui/mask-02.png"}},{"type":"Image","props":{"y":20,"x":64,"width":86,"skin":"ui/score_2.png","name":"scoreImg","height":30,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":205,"x":542,"name":"item2"},"child":[{"type":"Image","props":{"y":-3,"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":11,"x":6,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":78,"skin":"ui/mask-03.png"}},{"type":"Image","props":{"y":21,"x":60,"width":86,"skin":"ui/score_2.png","name":"scoreImg","height":30,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":292,"x":130,"name":"item3"},"child":[{"type":"Image","props":{"y":-3,"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":11,"x":6,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":78,"skin":"ui/mask-04.png"}},{"type":"Image","props":{"y":20,"x":58,"width":86,"skin":"ui/score_2.png","name":"scoreImg","height":30,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":294,"x":346,"name":"item4"},"child":[{"type":"Image","props":{"y":-3,"x":6,"width":111,"skin":"ui/mouse_normal_1.png","name":"normal","height":104}},{"type":"Image","props":{"y":11,"x":6,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":78,"skin":"ui/mask-05.png"}},{"type":"Image","props":{"y":24,"x":59,"width":86,"skin":"ui/score_2.png","name":"scoreImg","height":30,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":291,"x":545,"name":"item5"},"child":[{"type":"Image","props":{"y":-3,"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":11,"x":6,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":78,"skin":"ui/mask-06.png"}},{"type":"Image","props":{"y":20,"x":61,"width":86,"skin":"ui/score_2.png","name":"scoreImg","height":30,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":388,"x":121,"name":"item6"},"child":[{"type":"Image","props":{"y":-3,"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":11,"x":6,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":78,"skin":"ui/mask-07.png"}},{"type":"Image","props":{"y":23,"x":60,"width":86,"skin":"ui/score_2.png","name":"scoreImg","height":30,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":395,"x":347,"name":"item7"},"child":[{"type":"Image","props":{"y":-3,"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":11,"x":6,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":78,"skin":"ui/mask-08.png"}},{"type":"Image","props":{"y":24,"x":60,"width":86,"skin":"ui/score_2.png","name":"scoreImg","height":30,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":393,"x":565,"name":"item8"},"child":[{"type":"Image","props":{"y":-3,"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":11,"x":6,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":78,"skin":"ui/mask-09.png"}},{"type":"Image","props":{"y":23,"x":61,"width":86,"skin":"ui/score_2.png","name":"scoreImg","height":30,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":52,"x":51,"var":"scoreNums"},"child":[{"type":"Clip","props":{"skin":"ui/clip_number.png","name":"item0","clipX":10}},{"type":"Clip","props":{"x":18,"skin":"ui/clip_number.png","name":"item1","clipX":10}},{"type":"Clip","props":{"x":36,"skin":"ui/clip_number.png","name":"item2","clipX":10}},{"type":"Clip","props":{"x":54,"skin":"ui/clip_number.png","name":"item3","clipX":10}},{"type":"Clip","props":{"x":72,"skin":"ui/clip_number.png","name":"item4","clipX":10}},{"type":"Clip","props":{"x":90,"skin":"ui/clip_number.png","name":"item5","clipX":10}},{"type":"Clip","props":{"x":108,"skin":"ui/clip_number.png","name":"item6","clipX":10}},{"type":"Clip","props":{"x":126,"skin":"ui/clip_number.png","name":"item7","clipX":10}},{"type":"Clip","props":{"x":144,"skin":"ui/clip_number.png","name":"item8","clipX":10}},{"type":"Clip","props":{"x":162,"skin":"ui/clip_number.png","name":"item9","clipX":10}},{"type":"ProgressBar","props":{"y":-41,"x":-38.99999999999998,"var":"timeBar","value":1,"skin":"ui/progress_time.png"}}]}]};}
		]);
		return GameUI;
	})(View);
var GameOverUI=(function(_super){
		function GameOverUI(){
			
		    this.restartBtn=null;
		    this.scoreNums=null;

			GameOverUI.__super.call(this);
		}

		CLASS$(GameOverUI,'ui.GameOverUI',_super);
		var __proto__=GameOverUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameOverUI.uiView);
		}

		STATICATTR$(GameOverUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"width":500,"height":400},"child":[{"type":"Image","props":{"y":0,"x":0,"width":500,"skin":"ui/overBg.png","height":400,"sizeGrid":"14,11,13,12"}},{"type":"Button","props":{"y":283,"x":161,"var":"restartBtn","stateNum":"2","skin":"ui/btn_restart.png"}},{"type":"Image","props":{"y":64,"x":35,"skin":"ui/total Score.png"}},{"type":"Box","props":{"y":177,"x":155,"var":"scoreNums"},"child":[{"type":"Clip","props":{"skin":"ui/clip_number.png","name":"item0","clipX":10}},{"type":"Clip","props":{"x":18,"skin":"ui/clip_number.png","name":"item1","clipX":10}},{"type":"Clip","props":{"x":36,"skin":"ui/clip_number.png","name":"item2","clipX":10}},{"type":"Clip","props":{"x":54,"skin":"ui/clip_number.png","name":"item3","clipX":10}},{"type":"Clip","props":{"x":72,"skin":"ui/clip_number.png","name":"item4","clipX":10}},{"type":"Clip","props":{"x":90,"skin":"ui/clip_number.png","name":"item5","clipX":10}},{"type":"Clip","props":{"x":108,"skin":"ui/clip_number.png","name":"item6","clipX":10}},{"type":"Clip","props":{"x":126,"skin":"ui/clip_number.png","name":"item7","clipX":10}},{"type":"Clip","props":{"x":144,"skin":"ui/clip_number.png","name":"item8","clipX":10}},{"type":"Clip","props":{"x":162,"skin":"ui/clip_number.png","name":"item9","clipX":10}}]}]};}
		]);
		return GameOverUI;
	})(View);
var GameStartUI=(function(_super){
		function GameStartUI(){
			
		    this.startBtn=null;

			GameStartUI.__super.call(this);
		}

		CLASS$(GameStartUI,'ui.GameStartUI',_super);
		var __proto__=GameStartUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameStartUI.uiView);
		}

		STATICATTR$(GameStartUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"width":800,"height":600},"child":[{"type":"Image","props":{"y":55.5,"x":38.5,"skin":"ui/help.png"}},{"type":"Button","props":{"y":431,"x":311,"var":"startBtn","stateNum":"2","skin":"ui/btn_start.png"}}]};}
		]);
		return GameStartUI;
	})(View);
var HammerUI=(function(_super){
		function HammerUI(){
			
		    this.hit=null;
		    this.hammer=null;

			HammerUI.__super.call(this);
		}

		CLASS$(HammerUI,'ui.HammerUI',_super);
		var __proto__=HammerUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(HammerUI.uiView);
		}

		STATICATTR$(HammerUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"width":100,"height":100},"child":[{"type":"Image","props":{"y":62,"x":62,"width":98,"var":"hammer","skin":"ui/hammer.png","rotation":-20,"pivotY":50,"pivotX":57,"height":77},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"y":[{"value":62,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":0},{"value":60,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":5}],"rotation":[{"value":-20,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":0},{"value":20,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":1},{"value":-20,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":5}]}}],"name":"hit","id":1,"frameRate":24,"action":0}]};}
		]);
		return HammerUI;
	})(View);