function Wheel(canvasElem) {
	this.canvas = document.getElementById("canvas");
	this.btn = document.getElementById("btn");
	this.ctx = this.canvas.getContext("2d");//代码书写技巧，不互相影响

}

Wheel.prototype = {

	construtor:Wheel,

	beginDraw: function() {
		var this_ =this;
		this.btn.onclick = function() {
			this_.init();
		}
	},

	init: function() {
		
		var this_ = this;
		setInterval(function(){
			this_.clearCanvas();
			this_.createTurnplate();	
			this_.createWinarea();
			this_.createWinareath();
			this_.createPointer();

		},500)
	},

	clearCanvas: function() {
		this.ctx.clearRect(0,0,500,500);
	},

	createTurnplate: function() {
		this.ctx.save();
		this.ctx.arc(250, 250, 200, 0, Math.PI * 2);
		this.ctx.stroke();
		this.ctx.restore();
	},

	createWinarea: function() {
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.fillStyle = "red";
		this.ctx.arc(250, 250, 200, Math.PI * 1.5, 0);
		this.ctx.lineTo(250,250);
		this.ctx.lineTo(250,50);
		this.ctx.fill();
		this.ctx.restore();
	},

	createWinareath: function() {
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.fillStyle = "red";
		this.ctx.arc(250, 250, 200, Math.PI * 0.5, Math.PI * 1);
		this.ctx.lineTo(250,250);
		this.ctx.lineTo(250,50);
		this.ctx.fill();
		this.ctx.restore();
	},

	createPointer: function() {
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250, 250);
		var angle = Math.PI * (Math.random() * 2);
		this.ctx.rotate(angle);
		this.ctx.fillStyle = "#000";
		this.ctx.rect(-2, -150, 4, 150);
		this.ctx.fill();
		this.ctx.restore();
	},	

}

var wheel = new Wheel();//这是一个对象
	wheel.beginDraw();