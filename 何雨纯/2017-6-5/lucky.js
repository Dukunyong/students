function Lucky(canvasElem) {
	this.canvas = canvasElem;
	this.ctx = this.canvas.getContext("2d");
}

Lucky.prototype = {

	constructor: Lucky,

	init: function(i) {
		this.createLuckyPannel(i);			
		this.createLuckyline(i);
		this.createLuckyCenterDot();		
	},

	createLuckyPannel: function(i) {
		this.ctx.save();
		this.ctx.fillStyle = "red";
		this.ctx.strokeStyle = "white";
		this.ctx.arc(250, 250, 200, 0, Math.PI * 2);
		// this.ctx.rotate(i);
		this.ctx.stroke();
		this.ctx.fill();
		this.ctx.restore();
	},

	createLuckyCenterDot:function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.fillStyle="green";
		this.ctx.translate(250,250);
		this.ctx.rect(-2,-90,4,90);
		this.ctx.fill();
		this.ctx.restore();		
	},
	createLuckyline:function(i){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.fillStyle="white";
		this.ctx.strokeStyle="white";
		this.ctx.translate(250,250);
		this.ctx.rotate(i);
		this.ctx.font="25px 微软雅黑";
		for(var i=1;i<=10;i++){
			this.ctx.rect(0,0,2,200);
			this.ctx.rotate((Math.PI*2/10));
			this.ctx.fillText(i+"等奖",100,10);
		}
		this.ctx.fill();
		this.ctx.restore();
	},
	
}
