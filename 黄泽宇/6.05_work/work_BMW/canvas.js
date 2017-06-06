function Canvas(){
	this.canvas = document.getElementById("canvas");
	this.ctx = this.canvas.getContext("2d");
}
Canvas.prototype = {
	init:function(){
		this.firstCircle();
		this.secondCircle();
		this.center();
		this.leftTop();
		this.rightBtm();
		this.wordB();
		this.wordM();
		this.wordW();
	},
	firstCircle:function(){
		this.ctx.arc(250,250,100,0,Math.PI*2);
		this.ctx.strokeStyle = "#ccc";
		this.ctx.fillStyle = "#eee";
		this.ctx.fill();
		this.ctx.stroke();
	},
	secondCircle:function(){
		this.ctx.beginPath();
		this.ctx.arc(250,250,90,0,Math.PI*2);
//		this.ctx.font = "20px 微软雅黑";
//		this.ctx.strokeText("BMW",100,100);
		this.ctx.strokeStyle = "#ccc";
		this.ctx.fillStyle="#000";
		this.ctx.fill();
		this.ctx.stroke();
	},
	center:function(){
		this.ctx.beginPath();
		this.ctx.arc(250,250,60,0,Math.PI*2);
//		this.ctx.lineTo(250,250);
//		this.ctx.lineTo(200,250);
		this.ctx.fillStyle = "#fff";
		this.ctx.strokeStyle = "#ccc";
		this.ctx.fill();
		this.ctx.stroke();
		
		
	},
	leftTop:function(){
		this.ctx.beginPath();
		this.ctx.arc(250,250,60,Math.PI,Math.PI*3/2);
		this.ctx.lineTo(250,250);
		this.ctx.lineTo(190,250);
		this.ctx.fillStyle = "#4db2e2";
//		this.ctx.strokeStyle = "#ccc";
		this.ctx.fill();
//		this.ctx.stroke();
	},
	rightBtm:function(){
		this.ctx.beginPath();
		this.ctx.arc(250,250,60,0,Math.PI/2);
		this.ctx.lineTo(250,250);
		this.ctx.lineTo(310,250);
		this.ctx.fillStyle = "#4db2e2";
//		this.ctx.strokeStyle = "#ccc";
		this.ctx.fill();
//		this.ctx.stroke();
	},
	wordB:function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.font = "20px 微软雅黑";
		this.ctx.fillStyle = "#fff";
		this.ctx.rotate(Math.PI/-3);
		this.ctx.fillText("B",-100,275);
		this.ctx.restore();
	},
	wordM:function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.font = "20px 微软雅黑";
		this.ctx.fillStyle = "#fff";
		this.ctx.fillText("M",240,185);
		this.ctx.restore();
	},
	wordW:function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.font = "20px 微软雅黑";
		this.ctx.fillStyle = "#fff";
		this.ctx.rotate(Math.PI/3);
		this.ctx.fillText("W",335,-160);
		this.ctx.restore();
	}
}

var canvas = new Canvas();
canvas.init();
