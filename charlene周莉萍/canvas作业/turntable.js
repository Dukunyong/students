function Turntable(turnTableElem){
	this.turntable = turnTableElem;
	this.ctx = this.turntable.getContext("2d");
}
Turntable.prototype={
	constructor : Turntable,
	init:function(){
		var this_ = this;
		var hasRun = 0;
		var i = 1;
		var timer = setInterval(function(){
			i += 10;
			this_.clearDirection();
			this_.picture(i);
			if(i>=3000){
				clearInterval(timer)
			}
			console.log(1)
		},10);
	},
	
	picture:function(i){
		this.ctx.beginPath();
		this.ctx.save();
		img = new Image();
		this_ = this;
		img.onload=function(){
			this_.ctx.drawImage(img,0,10,650,728,0,10,650,728);
			this_.makeDirection(i);
		}
		img.src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496732397310&di=16ad894a9da68b1dc339df9f0c6358cf&imgtype=0&src=http%3A%2F%2Fpic15.nipic.com%2F20110628%2F1049304_095208968000_2.jpg";
		this.ctx.restore();
	},
	
	clearDirection: function() {
		this.ctx.clearRect(245,250,10,80);
	},
	
	makeDirection:function(i){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.fillStyle = "red";
		this.ctx.translate(245,250);
		this.ctx.rotate(i*Math.PI/180);		
		this.ctx.rect(0,0,2,100);
		this.ctx.fill();
		this.ctx.restore();
	}
	
	
}
