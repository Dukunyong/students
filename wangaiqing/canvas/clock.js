function Clock(canvasElem){
	this.canvas=canvasElem;
	this.ctx=this.canvas.getContext("2d");
	
//	console.log(this.hours);
}
Clock.prototype={
	constructor:Clock,
	init:function(){
		var that=this;
		setInterval(function(){
			that.getTime();
			that.clearCanvas();
			that.createClockPannel();//表盘
			that.createCenterDot();//中心点
			that.createScale();//刻度
			that.createHourPinter();//刻度
			that.createMinutePinter();//刻度
			that.createSecondPinter();//刻度
			that.createNumber();//刻度
			
		},1000)
	},
	getTime:function(){
		this.ctx.save();
		this.date=new Date();
		this.minutes=this.date.getMinutes();
		this.hours=(this.date.getHours()%12+this.minutes/60).toFixed(2);
		this.seconds= this.date.getSeconds() ;
		this.ctx.restore();
	},
	clearCanvas:function(){
		this.ctx.clearRect(0,0,500,500);
	},
	createClockPannel:function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.fillStyle="#e1e1e1";
		this.ctx.strokeStyle="#333";
		this.ctx.arc(250,250,100,0,Math.PI*2);
		this.ctx.fill();
		this.ctx.stroke();
		this.ctx.restore();
	},
	createCenterDot:function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.fillStyle="red";
		this.ctx.arc(250,250,5,0,Math.PI*2);
		this.ctx.fill();
		this.ctx.restore();
	},
	createScale:function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250,250);
		this.ctx.fillStyle="#000";
		for(var i=0;i<60;i++){
//			if(i%5==0){
//				this.ctx.rect(-2,-100,4,16);
//				
//			}else{
//				this.ctx.rect(-2,-100,4,4);
//			}
			(i%5==0)?this.ctx.rect(-1,-100,2,10):this.ctx.rect(-1,-100,2,4);
			this.ctx.rotate(Math.PI/30);
		}
		this.ctx.fill();
		this.ctx.restore();
	},
	createHourPinter:function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250,250);
		var angle=(this.hours/12)*Math.PI*2;
		this.ctx.rotate(angle);
		this.ctx.fillStyle="#000";
		this.ctx.rect(-2,-40,4,40);
		this.ctx.fill();
		this.ctx.restore();
		
	},
	createMinutePinter:function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250,250);
		var angle=(this.minutes/60)*Math.PI*2;
		this.ctx.rotate(angle);
		this.ctx.fillStyle="#000";
		this.ctx.rect(-2,-70,4,70);
		this.ctx.fill();
		this.ctx.restore();
		
	},
	createSecondPinter:function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250,250);
		var angle=(this.seconds/60)*Math.PI*2;
		this.ctx.rotate(angle);
		this.ctx.fillStyle="red";
		this.ctx.rect(-1,-90,2,90);
		this.ctx.fill();
		this.ctx.restore();
		
	},
	createNumber:function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250,250);
		for(var i=1;i<12;i++){
			var x=Math.sin(Math.PI/6*i)*80;
			var y=-Math.cos(Math.PI/6*i)*80;
		this.ctx.fillStyle="#333";
			
			this.ctx.fillText(i,x-4,y+4);
		}
		this.ctx.restore();
	}
}
//$.extend(newStyleClock.prototype,new Clock());
