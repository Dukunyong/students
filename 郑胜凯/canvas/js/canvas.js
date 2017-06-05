function Canvas(){
	this.canvas = document.getElementById("canvas");
	this.ctx = this.canvas.getContext("2d");
}
Canvas.prototype={
	
	constructor:Canvas,
	rect:function(){
		//设置填充色
		this.ctx.fillStyle="green";
		//设置边框颜色
		this.ctx.strokeStyle = "red";
		this.ctx.rect(0,0,200,200);
		this.ctx.stroke();
		this.ctx.fill();
	},
	arc:function(){
		//外圈
		this.ctx.arc(250,250,100,0,Math.PI*2);
		this.ctx.fillStyle = "black";
		this.ctx.stroke();
		this.ctx.fill();
		this.ctx.closePath();
		//内圈
//		this.ctx.beginPath();
//		this.ctx.fillStyle = "white";
//		this.ctx.arc(250,250,75,0,Math.PI*2);
//		this.ctx.stroke();
//		this.ctx.fill();
//		this.ctx.closePath();
		//四个圆角
		this.ctx.beginPath();
		this.ctx.arc(250,250,75,0,Math.PI/2);
		this.ctx.fillStyle = "blue";
		this.ctx.lineTo(250,250);
		this.ctx.stroke();
		this.ctx.fill();
		this.ctx.closePath();		
		
		this.ctx.beginPath();
		this.ctx.arc(250,250,75,Math.PI/2,Math.PI);
		this.ctx.fillStyle = "white";
		this.ctx.lineTo(250,250);
		this.ctx.stroke();
		this.ctx.fill();
		this.ctx.closePath();	
		
		this.ctx.beginPath();
		this.ctx.arc(250,250,75,Math.PI,Math.PI*3/2);
		this.ctx.fillStyle = "blue";
		this.ctx.lineTo(250,250);
		this.ctx.stroke();
		this.ctx.fill();
		this.ctx.closePath();
		
		this.ctx.beginPath();
		this.ctx.arc(250,250,75,Math.PI*3/2,Math.PI*2);
		this.ctx.fillStyle = "white";
		this.ctx.lineTo(250,250);
		this.ctx.stroke();
		this.ctx.fill();
		this.ctx.closePath();
		//写字
		this.ctx.font = "20px 微软雅黑";
		this.ctx.fillText("BMW",225,170)
		
	},
	quad:function(){
		this.ctx.moveTo(250,250);
		this.ctx.quadraticCurveTo(20,100,0,0);
		this.ctx.stroke();
	},
	biz:function(){
		this.ctx.moveTo(0,500);
		this.ctx.bezierCurveTo(100,0,400,500,500,0);
		this.ctx.stroke();
	},
	closePath:function(){
		this.ctx.arc(250,250,100,0,Math.PI/2);
		this.ctx.lineTo(250,250);
		this.ctx.lineTo(350,250);
		this.ctx.stroke();
		this.ctx.fillStyle = "blue";
		this.ctx.fill();
	},
	textBaseLine:function(){
		this.ctx.font = "40px 微软雅黑";
		this.ctx.moveTo(100,100);
		this.ctx.lineTo(200,100);
		this.ctx.stroke();
	}
	
}

var canvas=new Canvas();
canvas.arc();
