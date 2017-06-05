function Bmw(canvasEle){
	this.canvas=canvasEle;
	this.ctx=this.canvas.getContext("2d");
}

Bmw.prototype={
	construtor:Bmw,
	init:function(){
		this.excircle();
		this.middleCircle();
		this.charB();
		this.charM();
		this.charW();
		this.insideCircle();
		this.sector();
	},
	excircle:function(){
		this.ctx.translate(250,250);
		this.ctx.beginPath();
		this.ctx.strokeStyle="#666";
		this.ctx.fillStyle="#999";
		this.ctx.arc(0, 0, 50, 0, Math.PI*2);
		this.ctx.fill();
		this.ctx.stroke();
	},
	middleCircle:function(){
		this.ctx.beginPath();
		this.ctx.strokeStyle="#666";
		this.ctx.fillStyle="#111";
		this.ctx.arc(0, 0, 45, 0, Math.PI*2);
		this.ctx.fill();
		this.ctx.stroke();
	},
	charB:function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.fillStyle="#fff";
		this.ctx.font="18px 微软雅黑";
		this.ctx.rotate(-45*Math.PI/180);
		this.ctx.fillText("B", -10, -30);
		this.ctx.restore();
	},
	charM:function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.fillStyle="#fff";
		this.ctx.font="18px 微软雅黑";
		//this.ctx.rotate(-30*Math.PI/180);
		this.ctx.fillText("M", -10, -30);
		this.ctx.restore();
	},
	charW:function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.fillStyle="#fff";
		this.ctx.font="18px 微软雅黑";
		this.ctx.rotate(45*Math.PI/180);
		this.ctx.fillText("W", -10, -30);
		this.ctx.restore();
	},
	insideCircle:function(){
		this.ctx.beginPath();
		this.ctx.strokeStyle="#666";
		this.ctx.fillStyle="#fff";
		this.ctx.arc(0, 0, 30, 0, Math.PI*2);
		this.ctx.fill();
		this.ctx.stroke();
	},
	sector:function(){
		this.ctx.beginPath();
		this.ctx.strokeStyle="#666";
		this.ctx.fillStyle="#049";
		this.ctx.arc(0, 0, 28, 0, Math.PI*2/4);
		this.ctx.lineTo(0,0);
		this.ctx.lineTo(28,0);
		this.ctx.fill();
		this.ctx.stroke();

		this.ctx.beginPath();
		this.ctx.strokeStyle="#666";
		this.ctx.fillStyle="#fff";
		this.ctx.arc(0, 0, 28, Math.PI*2/4, Math.PI);
		this.ctx.lineTo(0,0);
		this.ctx.lineTo(0,28);
		this.ctx.fill();
		this.ctx.stroke();

		this.ctx.beginPath();		
		this.ctx.strokeStyle="#666";
		this.ctx.fillStyle="#049";
		this.ctx.arc(0, 0, 28, Math.PI, Math.PI*3/2);
		this.ctx.lineTo(0,0);
		this.ctx.lineTo(-28,0);
		this.ctx.fill();
		this.ctx.stroke();

		this.ctx.beginPath();		
		this.ctx.strokeStyle="#666";
		this.ctx.fillStyle="#fff";
		this.ctx.arc(0, 0, 28, Math.PI*3/2, Math.PI*2);
		this.ctx.lineTo(0,0);
		this.ctx.lineTo(0, -28);
		this.ctx.fill();
		this.ctx.stroke();
	}
}