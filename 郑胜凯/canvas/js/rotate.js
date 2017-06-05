function Canvas(){
	this.canvas = document.getElementById("canvas");
	this.ctx = this.canvas.getContext("2d");
}
Canvas.prototype={
	
	constructor:Canvas,
	
	arc:function(){
		//外圈
		this.ctx.arc(250,250,100,0,Math.PI*2);
		this.ctx.fillStyle = "black";
		this.ctx.stroke();
		this.ctx.fill();
		this.ctx.closePath();
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
		
	},
	Rotate:function(){
		var rotate = document.getElementById("rotate");
		var _this=this;
		rotate.onclick = function(){
			_this.ctx.rotate(Math.PI/6);
		}
	}
}
var canvas=new Canvas();
canvas.arc();

