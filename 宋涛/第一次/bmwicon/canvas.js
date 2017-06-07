function Canvas(){
	this.canvas=document.getElementById("canvas");
	this.ctx=this.canvas.getContext("2d");
}
Canvas.prototype={
	construtor:Canvas,
	//画第一个圆
	arc:function(){
		this.ctx.arc(250,250,100,0,Math.PI*2);
		this.ctx.fillStyle="black";
		this.ctx.fill();
		this.ctx.stroke();
		//画1/4圆
		this.ctx.beginPath();
		this.ctx.arc(250,250,80,0,Math.PI/2);
		this.ctx.fillStyle="blue";
		
		this.ctx.lineTo(250,250);
		this.ctx.lineTo(330,250);
		this.ctx.stroke();
		this.ctx.fill();
		//this.ctx.closePath();
		
		this.ctx.beginPath();
		this.ctx.arc(250,250,80,Math.PI/2,Math.PI);
		this.ctx.fillStyle="white";
		this.ctx.lineTo(250,250);
		this.ctx.lineTo(250,330);
		this.ctx.stroke();
		//this.ctx.closePath();
		this.ctx.fill();
			
		this.ctx.beginPath();
		this.ctx.arc(250,250,80,Math.PI,Math.PI*3/2);
		this.ctx.fillStyle="blue";
		
		this.ctx.stroke();
		this.ctx.lineTo(250,250);
		this.ctx.lineTo(170,250);
		//this.ctx.closePath();
		this.ctx.fill();
		
		this.ctx.beginPath();
		this.ctx.arc(250,250,80,Math.PI*3/2,Math.PI*2);
		this.ctx.fillStyle="white";
	
		this.ctx.lineTo(250,250);
		this.ctx.lineTo(250,170);
		this.ctx.stroke();
		//this.ctx.closePath();
		this.ctx.fill();
		//写上文字
		
		
	},
	font:function(){
		this.ctx.beginPath();
		this.ctx.fillStyle="white";
		this.ctx.font="20px 微软雅黑";
		this.ctx.fillText("BMW",225,170);
//		this.ctx.strokeText("bmw",200,200);
	}
}

var canvas=new Canvas();
canvas.arc();
canvas.font();

