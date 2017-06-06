function Canvas(canvas){
	this.canvas=canvas;
	this.ctx=this.canvas.getContext("2d");
}
Canvas.prototype={
	constructor:Canvas,
	init:function(){
		this.clearCanvas();
		this.circle();
		this.place();
		this.ball();
		this.pointer();
	},
	clearCanvas:function(){
		this.ctx.clearRect(0,0,500,500);
	},
	circle:function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.fillStyle="#eee";
		this.ctx.arc(250,250,150,0,Math.PI*2);
		this.ctx.fill();
		this.ctx.restore();
	},
	place:function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250,250);
		var arr=["唱歌","打牌","游戏","喝酒","跳舞","劳动","麻将","植树"];
		for(var i=0;i<arr.length;i++){
			var x=Math.sin(Math.PI/4*i)*130;
			var y=-Math.cos(Math.PI/4*i)*130;
			this.ctx.fillStyle="#333";
			textBaseline ="middle";   
			var width = this.ctx.measureText(arr[i]).width;
			this.ctx.fillText(arr[i],x-width/2,y+5);
		}
		this.ctx.restore();
	},
	ball:function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.fillStyle="#000";
		this.ctx.arc(250,250,5,0,Math.PI*2);
		this.ctx.fill();
	},
	pointer:function(){
		this.ctx.save();
		this.ctx.beginPath();	
		this.ctx.translate(250,250);
		this.ctx.fillStyle="#f00";
		this.ctx.rect(-1.5,-100,3,120);
		this.ctx.fill();
		this.ctx.restore();
	}
}