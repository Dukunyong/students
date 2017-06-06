function Canvas(canvas) {
	this.canvas = canvas;
	this.ctx = this.canvas.getContext("2d");
}

Canvas.prototype = {
	construtor: Canvas,

	init: function() {
		this.bmwOuter();
		this.bmwFont();
		this.bmwBlue();
	},

	bmwOuter: function() {
		//外圈圆
		this.ctx.fillStyle = "#c4d6e0";//设置矩形填充颜色
		this.ctx.arc(250, 250, 240, 0, Math.PI*2);
		this.ctx.fill();

		//中间圆环
		this.ctx.beginPath();
		this.ctx.fillStyle = "black";//设置矩形填充颜色
		this.ctx.arc(250, 250, 235, 0, Math.PI*2);
		this.ctx.fill();
		
	},
	
	bmwBlue: function() {
		//内部圆分色
		this.ctx.beginPath();
		this.ctx.lineWidth=3;
		this.ctx.strokeStyle="#a3a4a5";
		this.ctx.fillStyle = "white";
		this.ctx.arc(250, 250, 155, 0, Math.PI*2)
		this.ctx.stroke();
		this.ctx.fill();

		//蓝色部分1
		this.ctx.beginPath();
		this.ctx.fillStyle = "#4ea7d3";
		this.ctx.arc(250, 250, 150, 0, Math.PI/2)//
		this.ctx.lineTo(250,250);//从你上一个画的终点 链接到下一个点
		this.ctx.lineTo(395,250);
		this.ctx.fill();

		//蓝色部分2
		this.ctx.beginPath();
		this.ctx.fillStyle = "#4ea7d3";
		this.ctx.arc(250, 250, 150, Math.PI, Math.PI*1.5)//
		this.ctx.lineTo(250,250);//从你上一个画的终点 链接到下一个点
		this.ctx.lineTo(395,250);
		this.ctx.fill();
	},

	bmwFont: function(){
		//M
		this.ctx.save()
		this.ctx.beginPath();
		this.ctx.translate(250,250);
		this.ctx.fillStyle = "white";
		this.ctx.font = "70px 微软雅黑";
		this.ctx.fillText("M", -35, -170);
		this.ctx.restore();
		//B
		this.ctx.save()
		this.ctx.beginPath();
		this.ctx.translate(250,250);
		this.ctx.fillStyle = "white";
		this.ctx.rotate(-50*Math.PI/180);
		this.ctx.font = "70px 微软雅黑";
		this.ctx.fillText("B", -10, -170);	
		this.ctx.restore();
		//W
		this.ctx.save()
		this.ctx.beginPath();
		this.ctx.translate(250,250);
		this.ctx.fillStyle = "white";
		this.ctx.rotate(50*Math.PI/180);
		this.ctx.font = "70px 微软雅黑";
		this.ctx.fillText("W", -40, -170);	
		this.ctx.restore();
	}
}



var canvas = new Canvas(document.getElementById("canvas"));
canvas.init();




