function Turntable(canvasElem){
	this.canvas = canvasElem;
	this.ctx = this.canvas.getContext("2d");
}
Turntable.prototype = {
	constructor: Turntable,
	init:function(str){
		var i=str;
		this.clearCanvas();
		this.createPannel();
		this.createRegion();
		this.createPointer(i);
		this.createPrize();
	},
	createPannel: function(){
		this.ctx.fillStyle= "#e1e1e1";
		this.ctx.strokeStyle = "#333";
		this.ctx.arc(250, 250, 100, 0,Math.PI *2);
		this.ctx.stroke();
		this.ctx.fill();
	},
	createRegion: function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250,250);
		this.ctx.fillStyle = "#000";
		for(var i=0;i<12;i++){
			this.ctx.rect(-1, -100, 2, 100);
			this.ctx.rotate(Math.PI/6);
		}
		this.ctx.fill();
		this.ctx.restore();
	},
	createPrize: function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250,250);
		for(var i=1;i<=12;i++){
			var x = Math.sin(Math.PI/6 *i-Math.PI/4)*80,
			 	y = - Math.cos(Math.PI/6 *i-Math.PI/4)*80;
			 	this.ctx.textAlign = "center";
			 	this.ctx.fillStyle = "blue";
			 	this.ctx.fillText("奖品"+i,x,y);
		}
		this.ctx.restore();
	},
	createPointer:function(i){
		//this.ctx.clearRect(0,0,500,500);
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250,250);
		(i % 2 ==0) ? this.ctx.rotate(Math.PI/12*(i+1)) : this.ctx.rotate(Math.PI/12*i)
		this.ctx.fillStyle = "red";
		this.ctx.rect(-1 ,-70, 2, 70 );
		this.ctx.fill();
		this.ctx.restore();
	},
	clearCanvas: function(){
		this.ctx.clearRect(0,0,500,500);
	}
}
