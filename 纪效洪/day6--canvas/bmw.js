function Bmw(canvasElem){
	this.canvas = canvasElem ;
	this.ctx=this.canvas.getContext("2d"); 
}

Bmw.prototype = {  
	
	constructor:Bmw,
	
	init:function(){
		this.createOuterCircle();
		this.createLogo();
		this.font();
		this.createBackground();
		this.createLftUp();
		this.createLftDown();
		this.createRightDown();
		this.createRightUp();
	},
	
	createOuterCircle:function(){ //外层边框
		this.ctx.fillStyle = '#CCCCCE';
		this.ctx.strokeStyle = '#BEBEBE';
		this.ctx.arc(250,250,196,0,Math.PI*2);
		this.ctx.stroke();
		this.ctx.fill();
	},
	
	createLogo:function(){ //标志层
		this.ctx.beginPath();
		this.ctx.fillStyle = '#52575B';
		this.ctx.arc(250,250,188,0,Math.PI*2);
		this.ctx.fill();
	},	
	
	createBackground:function(){ //背景层
		this.ctx.beginPath();
		this.ctx.fillStyle = '#919499';
		this.ctx.arc(250,250,118,0,Math.PI*2);
		this.ctx.fill();
	},
	
	createLftUp:function(){ //左上
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.fillStyle = '#2A87C2';
		this.ctx.moveTo(248,248);
		this.ctx.lineTo(248,137);
		this.ctx.arc(248,248,111,Math.PI*1.5,Math.PI,true);
		this.ctx.closePath();
		this.ctx.fill();
		this.ctx.restore();
	},
	
	createLftDown:function(){ //左下
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.fillStyle = '#F0F0F0';
		this.ctx.moveTo(248,252);
		this.ctx.lineTo(138,252);
		this.ctx.arc(248,252,111,Math.PI,Math.PI/2,true);
		this.ctx.closePath();
		this.ctx.fill();
		this.ctx.restore();
	},
	createRightDown:function(){ //左下
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.fillStyle = '#2A87C2';
		this.ctx.moveTo(252,252);
		this.ctx.lineTo(252,393);
		this.ctx.arc(252,252,111,Math.PI*0.5,0,true);
		this.ctx.closePath();
		this.ctx.fill();
		this.ctx.restore();
	},
	createRightUp:function(){ //左下
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.fillStyle = '#F0F0F0';
		this.ctx.moveTo(252,248);
		this.ctx.lineTo(393,248);
		this.ctx.arc(252,248,111,0,Math.PI*1.5,true);
		this.ctx.closePath();
		this.ctx.fill();
		this.ctx.restore();
	},
	font:function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.font="60px 微软雅黑";
		this.ctx.fillStyle="#FEFCFD";
		this.ctx.translate(250,250);
		var bmw = ["B","M","W"]
		var arr=[-1,0,1]
		for(var i=0;i<bmw.length;i++){
			this.ctx.save();
			this.ctx.beginPath();
			var x=Math.sin(Math.PI/6*0)*135;
			var y=-Math.cos(Math.PI/6*0)*135; 
			this.ctx.rotate(50*arr[i]*Math.PI/180);
			this.ctx.fillText(bmw[i],x-28,y+5);
			this.ctx.restore();
		}
		this.ctx.fill();
		this.ctx.restore();
	}
}	

