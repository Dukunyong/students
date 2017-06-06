function Clock(canvasElem) {
	this.canvas = canvasElem;
	this.ctx = this.canvas.getContext("2d");
}
Clock.prototype = {
	constructor: Clock,
	init: function() {
		var this_ = this;
		setInterval(function(){
			this_.getTime();
			this_.clearCanvas();
			this_.createClockPannel();
			this_.createCenterDot();
			this_.createScale();
			this_.createHourPointer();
			this_.createMinutePointer();
			this_.createSecondPointer();
			this_.createNumber();
		}, 1000);
	},
	getTime: function() {
		this.date = new Date();
		this.minutes = this.date.getMinutes();
		this.hours = (this.date.getHours() % 12 + this.minutes / 60).toFixed(2) ;
		this.seconds = this.date.getSeconds();
	},
	clearCanvas: function() {
		this.ctx.clearRect(0,0,500,500);
	},
	createClockPannel: function() {
		this.ctx.fillStyle = "gray";
		this.ctx.strokeStyle = "gray";
		this.ctx.arc(250, 250, 100, 0, Math.PI *2);
		this.ctx.stroke();
		this.ctx.fill();
	},
	createCenterDot: function() {
		this.ctx.beginPath();
		this.ctx.fillStyle = "red";
		this.ctx.arc(250, 250, 5, 0, Math.PI *2);
		this.ctx.fill();
	},
	createScale: function() {
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250, 250);
		this.ctx.fillStyle = "black";
		for (var i = 0; i < 60; i++) {
			if( i % 5 == 0 ){
				this.ctx.rect(0, -97, 2, 12);
				this.ctx.rotate(Math.PI / 30);
			}else{
				this.ctx.rect(0, -97, 2, 7);
				this.ctx.rotate(Math.PI / 30);
			}
		}
		this.ctx.fill();
		this.ctx.restore();
	},
	createHourPointer: function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250, 250);
		var angle = (this.hours / 12) * Math.PI * 2;
		this.ctx.rotate(angle);
		this.ctx.fillStyle = "black";
		this.ctx.rect(-2, -40, 4, 40);
		this.ctx.fill();
		this.ctx.restore();
	},
	createMinutePointer: function() {
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250, 250);
		var angle = (this.minutes / 60) * Math.PI * 2;
		this.ctx.rotate(angle);
		this.ctx.fillStyle = "black";
		this.ctx.rect(-1, -70, 2, 70);
		this.ctx.fill();
		this.ctx.restore();
	},

	createSecondPointer: function() {
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250, 250);
		var angle = (this.seconds / 60) * Math.PI * 2;
		this.ctx.rotate(angle);
		this.ctx.fillStyle = "red";
		this.ctx.rect(-1, -90, 2, 90);
		this.ctx.fill();
		this.ctx.restore();
	},

	createNumber: function() {
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250, 250);
		for (var i = 1; i <= 12; i++) {
			var x = Math.sin(Math.PI/6 * i) * 80,
				y = - Math.cos(Math.PI/6 * i) * 80;
			this.ctx.fillStyle = "black";
			this.ctx.fillText(i, x-3, y+4);
		}
		this.ctx.restore();
	}
}

function newStyleClock(canvasElem) {
	this.canvas = canvasElem;
	this.ctx = this.canvas.getContext("2d");
}
$.extend(newStyleClock.prototype, new Clock());
	newStyleClock.prototype.createMinutePointer = function() {
}










