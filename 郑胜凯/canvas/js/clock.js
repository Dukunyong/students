//构造函数,整体的函数叫类，红包书162-200页
function Clock(canvasElem){
	this.canvas = canvasElem;
	this.ctx = this.canvas.getContext("2d");
}

Clock.prototype = {
	constructor:Clock,
	init:function(){
		var _this = this;
		
		setInterval(function(){
			_this.getTime();
			_this.clearCanvas();
			_this.createClockPannel();
			_this.createCenterDot();
			_this.createScale();
			_this.createHourPinter();
			_this.createMinutePinter();
			_this.createSecondPinter();
			_this.createNumber();
			
		},1000);
		
	},
	
	getTime:function(){
		this.date = new Date();
		this.minutes = this.date.getMinutes();
		this.hours = (this.date.getHours() % 12 + this.minutes / 60).toFixed(2) ;
		this.seconds = this.date.getSeconds();
	},
	clearCanvas:function(){
		this.ctx.clearRect(0,0,500,500);
	},
	createClockPannel:function(){
		this.ctx.fillStyle = "#ccc";
		this.ctx.strokeStyle="#333";
		this.ctx.arc(250, 250, 100, 0, Math.PI*2);
		this.ctx.fill();
		this.ctx.stroke();
		
	},
	createCenterDot:function(){
		this.ctx.beginPath();
		this.ctx.fillStyle = 'red';
		this.ctx.arc(250,250,5,0,2*Math.PI);
		this.ctx.fill();

	},
	createScale:function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250,250);
		this.ctx.fillStyle = "#000";
		for(var i=0;i<60;i++){
			(i % 5 == 0)?this.ctx.rect(-1,-100,2,10):this.ctx.rect(-1,-100,2,4);
			this.ctx.rotate(Math.PI/30);
		}
		this.ctx.fill();
		this.ctx.restore();
	},
	createHourPinter:function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250,250);
		var angle = (this.hours/12)*Math.PI*2;
		this.ctx.rotate(angle);
		this.ctx.rect(-2,-45,4,50);
		this.ctx.fill();
		this.ctx.restore();
	},
	createMinutePinter:function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250, 250);
		var angle = (this.minutes / 60) * Math.PI * 2;
		this.ctx.rotate(angle);
		this.ctx.fillStyle = "#000";
		this.ctx.rect(-1, -70, 2, 70);
		this.ctx.fill();
		this.ctx.restore();
	},
	createSecondPinter:function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250,250);
		var angle = (this.seconds/60)*Math.PI*2;
		this.ctx.rotate(angle);
		this.ctx.rect(-1,-0,2,90);
		this.ctx.fill();
		this.ctx.restore();
	},
	createNumber:function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250,250);
		for(var i = 1; i<=12; i++){
			var x = Math.sin(Math.PI/6*i)*80;
			var y = -Math.cos(Math.PI/6*i)*80;
			this.ctx.fillStyle = "red";
			this.ctx.fillText(i,x-4,y+5);
		}
		this.ctx.restore();
	}
}

