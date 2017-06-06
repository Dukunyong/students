
function Clock(canvasElem){
	this.canvas = canvasElem;
	this.ctx = this.canvas.getContext("2d");
}

Clock.prototype = {
	//162 - 200
	constructor: Clock,
	
	init: function(){
		var this_ = this;
		setInterval(function(){
			this_.getTime();
			this_.clearCanvas();
			this_.createClockPannel();
			this_.createCenterDot();
			this_.createScale();
			//
			this_.creatHover();
			//
			this_.creatMinter();
			//
			this_.creatSecond();
			//
			this_.createNumbr();
		},1000);
		
	},
	getTime: function(){
		this.date =new Date();
		this.minutes= this.date.getMinutes();
		this.hours= (this.date.getHours() % 12 + this.minutes / 60).toFixed(2);
		this.seconds= this.date.getSeconds();
	},
	clearCanvas: function(){
		this.ctx.clearRect(0,0,500,500);
	},
	//表盘
	createClockPannel: function(){
		this.ctx.fillStyle= "#e1e1e1";
		this.ctx.strokeStyle = "#333";
		this.ctx.arc(250, 250, 100, 0,Math.PI *2);
		this.ctx.stroke();
		this.ctx.fill();
	},
	//中心点
	createCenterDot: function(){
		this.ctx.beginPath();
		this.ctx.fillStyle= "red";
		this.ctx.arc(250, 250, 3, 0,Math.PI *2);
		this.ctx.fill();
	},
	//刻点
	createScale: function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250,250);
		this.ctx.fillStyle = "#000";
		for(var i=0 ;i<60;i++){
			(i % 5 == 0) ? this.ctx.rect(-1, -100, 2, 10) : this.ctx.rect(-1, -100, 2, 4);
			this.ctx.rotate(Math.PI/30);
		}
		
		this.ctx.fill();
		this.ctx.restore();
	},
	creatHover: function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250,250);
		var angle =(this.hours / 12) * Math.PI * 2;
		this.ctx.rotate(angle);
		this.ctx.fillStyle = "#000";
		this.ctx.rect(-1.5 ,-40, 3, 50 );
		this.ctx.fill();
		this.ctx.restore();
	},
	creatMinter: function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250,250);
		var angle =(this.minutes / 60) * Math.PI * 2;
		this.ctx.rotate(angle);
		this.ctx.fillStyle = "#000";
		this.ctx.rect(-1 ,-70, 2, 80 );
		this.ctx.fill();
		this.ctx.restore();
	},
	creatSecond: function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250,250);
		var angle =(this.seconds / 60) * Math.PI * 2;
		this.ctx.rotate(angle);
		this.ctx.fillStyle = "red";
		this.ctx.rect(-1 ,-90, 2, 100 );
		this.ctx.fill();
		this.ctx.restore();
	},
	createNumbr: function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250,250);
		for(var i=1;i<=12;i++){
			var x = Math.sin(Math.PI/6 *i)*80,
			 	y = - Math.cos(Math.PI/6 *i)*80;
			 	this.ctx.fillStyle = "#000";
			 	this.ctx.fillText(i,x-4,y+5)
		}
		this.ctx.restore();
	}
}

