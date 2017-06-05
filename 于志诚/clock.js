function Clock(){
	this.canvas = document.querySelector('#canvas');
	this.ctx = this.canvas.getContext('2d');
	
	//console.log(this.hours,this.minutes,this.seconds)
}
Clock.prototype = {
	constructor: Clock,
	init:function(){
		var _this = this
		setInterval(function(){
			_this.clearCanvas();
			_this.createCloclPanner();
			_this.createRedCenter();
			_this.createScale();
			_this.createNumber();
			_this.getTime();
			_this.createHour();
			_this.createMinutr();
			_this.createSecond();
			
		},1000)
			
	},
	clearCanvas:function(){
		this.ctx.clearRect(0,0,500,500)
	},
	getTime:function(){
		this.date = new Date();
		this.seconds = this.date.getSeconds();
		this.minutes = this.date.getMinutes();
		this.hours = (this.date.getHours()%12+(this.minutes/60)).toFixed(2);
	},
	createCloclPanner:function(){
		this.ctx.fillStyle = '#eee';
		this.ctx.strokeStyle = '#333';
		this.ctx.arc(250,250,100,0,2*Math.PI);
		this.ctx.stroke();
		this.ctx.fill();
	},
	createRedCenter:function(){
		this.ctx.beginPath();
		this.ctx.fillStyle = 'red';
		this.ctx.strokeStyle = '#333';
		this.ctx.arc(250,250,3,0,2*Math.PI);
		this.ctx.fill();
	},
	createScale:function(){
		this.ctx.beginPath();
		this.ctx.save();
		this.ctx.fillStyle = '#000'
		this.ctx.translate(250,250);
		for(var i = 0;i<60;i++){
			if(i%5==0){
				this.ctx.rect(-1,-97,2,12);
				this.ctx.rotate(Math.PI/30);
			}else{
				this.ctx.rect(-1,-97,2,4);
				this.ctx.rotate(Math.PI/30);
			}
			
		}
		this.ctx.fill();
		this.ctx.restore();
	},
	createHour:function(){
		this.ctx.beginPath();
		this.ctx.save();
		this.ctx.fillStyle = '#000'
		this.ctx.translate(250,250);
		var angle = (this.hours/12* Math.PI * 2);
		this.ctx.rotate(angle);
		this.ctx.rect(-2,-32,4,40);
		this.ctx.fill();
		this.ctx.restore();
	},
	createMinutr:function(){
		this.ctx.beginPath();
		this.ctx.save();
		this.ctx.fillStyle = '#000'
		this.ctx.translate(250,250);
		var angle = (this.minutes/60* Math.PI * 2);
		this.ctx.rotate(angle);
		this.ctx.rect(-1,-42,2,50);
		this.ctx.fill();
		this.ctx.restore();
	},
	createSecond:function(){
		this.ctx.beginPath();
		this.ctx.save();
		this.ctx.fillStyle = 'red'
		this.ctx.translate(250,250);
		var angle = (this.seconds/60* Math.PI * 2);
		this.ctx.rotate(angle);
		this.ctx.rect(-1,-62,2,70);
		this.ctx.fill();
		this.ctx.restore();
	},
	createNumber:function(){
		this.ctx.beginPath();
		this.ctx.save();
		this.ctx.translate(250,250);
		for(var j = 12;j>0;j--){
			var x = Math.sin(Math.PI/6*j)*76,
				y = -Math.cos(Math.PI/6*j)*76;
			this.ctx.fillStyle = '#000';
			this.ctx.fillText(j,x-5,y+5)
		}
		this.ctx.restore();
	}

}
var clock = new Clock();
clock.init();