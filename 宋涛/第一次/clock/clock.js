//类包含了构造函数和原型
function Clock(canvasElem){
	this.canvas=canvasElem;
	this.ctx=this.canvas.getContext("2d");
}



Clock.prototype={
	constructor:Clock,//红宝书162-200
	init:function(){
		var this_=this;
		setInterval(function(){
		this_.getTime();
		this_.clearCanvas();
		this_.createCenterDot();
		this_.createClockPannel();
		this_.createScale();
		this_.createHourPointer();
		this_.createminutePointer();
		this_.createsecondPointer();
		this_.createNumber();
		},1000);
		
	},
	getTime:function(){
		this.date=new Date();
		this.minutes=this.date.getMinutes();
		this.hours = (this.date.getHours() % 12 + this.minutes / 60).toFixed(2) ;
		this.seconds=this.date.getSeconds();

	},
	clearCanvas:function(){
		this.ctx.clearRect(0,0,500,500);
	},
	
	createClockPannel:function(){
		this.ctx.fillStyle="#ccc";
		this.ctx.strokeStyle="#333";
		this.ctx.arc(250, 250, 100, 0, Math.PI*2);
		this.ctx.stroke();
		this.ctx.fill();
	},
	createCenterDot:function(){
		
		this.ctx.beginPath();
		this.ctx.fillStyle="red";
		this.ctx.arc(250, 250, 5, 0, Math.PI*2);
		this.ctx.fill();
		
	},
	createScale:function(){
		this.ctx.save();
		this.ctx.beginPath();
		
		this.ctx.translate(250,250);
		this.ctx.fillStyle="#000";
		for(var i=0;i<60;i++){
			(i%5==0) ? this.ctx.rect(-1,-100,2,10) : this.ctx.rect(-1,-100,2,4);
			this.ctx.rotate(Math.PI/30);
		
		}
		this.ctx.fill();
		this.ctx.restore();
	},
	createHourPointer:function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250,250);
		this.ctx.fillStyle="#000";
		var angle = (this.hours / 12) * Math.PI * 2;
		this.ctx.rotate(angle);
		this.ctx.rect(-2,-40,4,40);
		
		this.ctx.fill();
		this.ctx.restore();
	},
	createminutePointer:function(){
		this.ctx.save();
		this.ctx.beginPath();
		
		this.ctx.translate(250,250);
		var angle = (this.minutes / 60) * Math.PI * 2;
		this.ctx.rotate(angle);
		this.ctx.fillStyle="#000";
		this.ctx.rect(-1,-70,2,70);
		
		this.ctx.fill();
		this.ctx.restore();
	},
	createsecondPointer:function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250,250);
		var angle = (this.seconds / 60) * Math.PI * 2;
		this.ctx.rotate(angle);
		this.ctx.fillStyle="red";
		this.ctx.rect(-1,-70,2,90);
		this.ctx.fill();
		this.ctx.restore();
	},
	createNumber:function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250,250);
		for(var i=1;i<=12;i++){
			var x=Math.sin(Math.PI/6*i)*80;
			var y=-Math.cos(Math.PI/6*i)*80;
			this.ctx.fillStyle="#333";
			this.ctx.fillText(i,x-4,y);
		}
		this.ctx.restore();
	}
	
}

//var clock=new Clock();
//clock.init();




