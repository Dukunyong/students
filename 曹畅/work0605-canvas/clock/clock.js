function Clock(canvasElem){
	this.canvas = canvasElem;
	this.ctx = this.canvas.getContext("2d");
	this.ang = Math.PI/180;
}

Clock.prototype = {
	constructor: Clock,
	
	init:function(){
		var this_ = this;
		setInterval(function(){
			this_.getTime();
			this_.createClockPannel();
			this_.createCenterDot();
			this_.createScale();
			this_.createHourPinter();
			this_.createMinutePinter();
			this_.createSecondPinter();
			this_.createNum();	
		},1000)
	},
	
	getTime: function(){
		this.date = new Date();
		this.min = this.date.getMinutes();
		this.hours = (this.date.getHours() % 12 + this.min/60).toFixed(2);
		this.sec = this.date.getSeconds();
	},
	
	createClockPannel: function(){
		this.ctx.fillStyle = "#e1e1e1";
		this.ctx.strokeStyle = "#333";
		this.ctx.arc(250,250,100,0,this.ang*360);
		this.ctx.stroke();
		this.ctx.fill();
	},
	
	createCenterDot: function(){
		this.ctx.beginPath();
		this.ctx.fillStyle = "red";
		this.ctx.arc(250,250,5,0,this.ang*360);
		this.ctx.fill();
	},
	
	createScale: function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250,250);
		this.ctx.fillStyle = "black";
		for (var i = 0; i < 60; i++) {
			(i % 5 == 0) ? this.ctx.rect(-1,-100,2,10) : this.ctx.rect(-1,-100,2,4);
			this.ctx.rotate(this.ang*6);
		}
		this.ctx.fill();
		this.ctx.restore();
	},
	
	createHourPinter: function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250,250);
		this.ctx.fillStyle = "black";
		var angle = (this.hours/12)*this.ang*360;
		this.ctx.rotate(angle);
		this.ctx.rect(-2,-40,4,40);
		this.ctx.fill();
		this.ctx.restore();
	},
	
	createMinutePinter: function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250,250);
		this.ctx.fillStyle = "black";
		var angle = (this.min/60)*this.ang*360;
		this.ctx.rotate(angle);
		this.ctx.rect(-1,-70,2,70);
		this.ctx.fill();
		this.ctx.restore();
	},
	
	createSecondPinter: function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250,250);
		this.ctx.fillStyle = "red";
		var angle = (this.sec/60)*this.ang*360;
		this.ctx.rotate(angle);
		this.ctx.rect(-1,-90,2,90);
		this.ctx.fill();
		this.ctx.restore();
	},
	createNum: function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250,250);
		this.ctx.fillStyle = "green";
		for(var i = 1; i <=12; i++){
			var x = Math.sin(this.ang*30*i)*80,
				y = Math.cos(this.ang*30*i)*80;
			this.ctx.fillText(i,-x-4,-y+4);
		}
		this.ctx.restore();
	}
	
}

var canvasElem = document.getElementById("canvas"); 
var clock = new Clock(canvasElem);
clock.init();
