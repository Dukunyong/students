function Clock( canvasElem ){
	this.canvas = canvasElem;
	this.ctx = this.canvas.getContext("2d");
}

Clock.prototype = {
	construction: Clock,
	init: function(){
		this.drawImageOne();
		this.drawImageTwo();
		this.drawImageThree();
		this.drawImageFour();
		this.drawText();
	},
	drawImageOne: function(){
		var img = new Image();
		var _this = this;
		img.onload = function(){
			_this.ctx.drawImage(img,0,0,160,160);
		}
		img.src = "https://gss3.bdstatic.com/84oSdTum2Q5BphGlnYG/timg?wapp&quality=80&size=b150_150&subsize=20480&cut_x=0&cut_w=0&cut_y=0&cut_h=0&sec=1369815402&srctrace&di=0bb5ade27e98b1963fcd934b5ff52b54&wh_rate=null&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fpic%2Fitem%2Fb8014a90f603738d7cf510fabb1bb051f919ecaf.jpg";
	},
	drawImageTwo: function(){
		var img = new Image();
		var _this = this;
		img.onload = function(){
			_this.ctx.drawImage(img,160,0,160,160);
		}
		img.src = "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1752747605,2913677738&fm=26&gp=0.jpg";
	},
	drawImageThree: function(){
		var img = new Image();
		var _this = this;
		img.onload = function(){
			_this.ctx.drawImage(img,0,160,160,160);
		}
		img.src = "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1752747605,2913677738&fm=26&gp=0.jpg";
	},
	drawImageFour: function(){
		var img = new Image();
		var _this = this;
		img.onload = function(){
			_this.ctx.drawImage(img,160,160,160,160);
		}
		img.src = "https://gss3.bdstatic.com/84oSdTum2Q5BphGlnYG/timg?wapp&quality=80&size=b150_150&subsize=20480&cut_x=0&cut_w=0&cut_y=0&cut_h=0&sec=1369815402&srctrace&di=0bb5ade27e98b1963fcd934b5ff52b54&wh_rate=null&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fpic%2Fitem%2Fb8014a90f603738d7cf510fabb1bb051f919ecaf.jpg";
	},
	drawText: function(){
		this.ctx.font = "40px 微软雅黑";
		this.ctx.fillText("Canvas" , 0, 380);
		this.ctx.shadowColor = 'red';
		this.ctx.shadowBlur = 20;
		this.ctx.shadowOffsetX = 10;
		this.ctx.fill();
	}
	
	
}