function Clock(canvasElem) {
	this.canvas = canvasElem;
	this.ctx = this.canvas.getContext("2d");
}

Clock.prototype = {
	//162-200页。高级程序设计
	constructor: Clock,
		
	init: function(){
		
		var _this=this;
		setInterval(function(){
			_this.getDate();
			_this.createClockPannel();
			_this.createScale();	
			_this.createNumber();			
			_this.createHourPinter();
			_this.createMinutePoint();
			_this.createSecondPoint();
			_this.createCenterDot();
		},1000);
		
	},
	getDate: function(){
		this.date = new Date();			
		this.seconds = this.date.getSeconds();
		this.minutes = (this.date.getMinutes() % 60 + this.seconds/60).toFixed(2);
		this.hours = (this.date.getHours() % 12 + this.minutes/60).toFixed(2) ;
		//console.log(this.minutes,this.seconds,this.hours);
		
	},
	clearCanvas: function() {
		this.ctx.clearRect(0,0,500,500);
	},
	createClockPannel: function(){
		this.ctx.beginPath();	
		this.ctx.strokeStyle = "#333";
		this.ctx.fillStyle = "#e4e4e4";
		this.ctx.arc(300, 300, 100, 0, Math.PI*2);
		this.ctx.stroke();
		this.ctx.fill();
	},

	createCenterDot: function(){
		this.ctx.beginPath();		
		this.ctx.fillStyle = "red";
		this.ctx.arc(300, 300, 3, 0, Math.PI*2);
		this.ctx.fill();
	},

	createScale: function(){
		this.ctx.beginPath();
		this.ctx.save();
		this.ctx.translate(300,300);
		this.ctx.fillStyle = "#000";		
		for(var i = 60; i >= 0; i--){
			(i % 5 == 0) ? 	this.ctx.rect(-1, -98, 2, 9) : this.ctx.rect(-1, -98, 2, 3)					
			this.ctx.rotate(Math.PI / 30);
		}
		this.ctx.fill();
		this.ctx.restore();
		
	},

	createHourPinter: function(){
		this.ctx.beginPath();
		this.ctx.save();		
		this.ctx.translate(300,300);
		this.ctx.rotate((this.hours/12)*Math.PI*2);
		this.ctx.fillStyle = "#000";
		this.ctx.rect(-1,-30,2,30);
		this.ctx.fill();
		this.ctx.restore();
	},

	createMinutePoint:function(){
		this.ctx.beginPath();
		this.ctx.save();
		this.ctx.fillStyle = "#000";
		this.ctx.translate(300,300);
		this.ctx.rotate((this.minutes/60)*Math.PI*2);
		this.ctx.rect(-0.5,-50,1,50);		
		this.ctx.fill();
		this.ctx.restore();
	},

	createSecondPoint:function(){
		this.ctx.beginPath();
		this.ctx.save();
		this.ctx.fillStyle = "red";
		this.ctx.translate(300,300);
		this.ctx.rotate((this.seconds/60)*Math.PI*2);
		this.ctx.rect(-0.5,-70,1,70);
		
		this.ctx.fill();
		this.ctx.restore();
	},

	createNumber: function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(300,300);
		this.ctx.fillStyle = "#36c";
		this.ctx.textAlign = "center";
		for(var i = 12; i >0; i--){
			var x = Math.sin(Math.PI/6*i)*76;
			var y = -Math.cos(Math.PI/6*i)*76;
			this.ctx.fillText(i, x, y);			
		}
		this.ctx.fill();
		this.ctx.restore();

	}

}


