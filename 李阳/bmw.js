function Canvas() {
	this.canvas = document.getElementById("canvas");
	this.ctx = this.canvas.getContext("2d");
}

Canvas.prototype = {
	constructor:Canvas,
	arc: function() {
		this.ctx.arc(250,250,150,0,Math.PI * 2);
		this.ctx.stroke();
		this.ctx.strokeStyle = "#bfd2d9"
		this.ctx.lineCap = "butt";
		this.ctx.lineWidth = 6;
		this.ctx.stroke();
		this.ctx.beginPath();

		this.ctx.arc(250,250,118,0,Math.PI * 2);
		this.ctx.stroke();
		this.ctx.strokeStyle = "#040404"
		this.ctx.lineCap = "butt";
		this.ctx.lineWidth = 60;
		this.ctx.stroke();
		this.ctx.beginPath();

		this.ctx.strokeStyle = "#a3bbc5";
		this.ctx.fillStyle = "#1783db";
		this.ctx.lineCap = "butt";
		this.ctx.lineWidth = 4;
		this.ctx.arc(250, 250, 84, 0, Math.PI / 2);
		this.ctx.lineTo(250, 250);
		this.ctx.lineTo(335, 250);
		this.ctx.stroke();
		this.ctx.fill();

		this.ctx.beginPath();
		this.ctx.strokeStyle = "#a3bbc5";
		this.ctx.fillStyle = "#1783db";
		this.ctx.lineCap = "butt";
		this.ctx.lineWidth = 4;
		this.ctx.arc(250, 250, 84, Math.PI, Math.PI *1.5);
		this.ctx.lineTo(250, 250);
		this.ctx.lineTo(335, 250);
		this.ctx.stroke();
		this.ctx.fill();

		this.ctx.beginPath();
		this.ctx.strokeStyle = "#a3bbc5";
		this.ctx.fillStyle = "#fff";
		this.ctx.lineCap = "butt";
		this.ctx.lineWidth = 4;
		this.ctx.arc(250, 250, 84, Math.PI * 1.5, 0);
		this.ctx.lineTo(250, 250);
		this.ctx.lineTo(250, 165);
		this.ctx.stroke();
		this.ctx.fill();

		this.ctx.beginPath();
		this.ctx.strokeStyle = "#a3bbc5";
		this.ctx.fillStyle = "#fff";
		this.ctx.lineCap = "butt";
		this.ctx.lineWidth = 4;
		this.ctx.arc(250, 250, 84, Math.PI * 0.5, Math.PI);
		this.ctx.lineTo(250, 250);
		this.ctx.lineTo(250, 335);
		this.ctx.stroke();
		this.ctx.fill();

		this.ctx.beginPath();
		this.ctx.font = "40px 微软雅黑";
		var width = this.ctx.measureText("M").width;
		this.ctx.fillText("M" , 250 - width / 2, 150);
		this.ctx.beginPath();
		this.ctx.font = "40px 微软雅黑";
		var width = this.ctx.measureText("B").width;
		this.ctx.fillText("B" , 150, 180);


		this.ctx.beginPath();
		this.ctx.font = "40px 微软雅黑";
		var width = this.ctx.measureText("W").width;
		this.ctx.fillText("W" , 310, 180);
	}
	
		



}

var canvas = new Canvas();
canvas.arc();
// canvas.lineCap();