function Canvas(){
	this.canvas = document.getElementById("canvas");
	this.ctx = this.canvas.getContext("2d");
}
Canvas.prototype = {
	constructor:Canvas,
	init:function(){
		this.big();
		this.small();
		this.rightBtm();
		this.letfTop();
		this.bmwTit();
	},
	big:function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.fillStyle="#000";
		this.ctx.strokeStyle = "#9da6ac";
		this.ctx.lineWidth=8;
		this.ctx.arc(250,250,240,0,Math.PI*2);
		this.ctx.stroke();
		this.ctx.fill();
		this.ctx.restore();
	},
	small:function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.fillStyle="#f6f7f7";
		this.ctx.strokeStyle = "#9da6ac";
		this.ctx.lineWidth=10;
		this.ctx.arc(250,250,180,0,Math.PI*2);
		this.ctx.stroke();
		this.ctx.fill();
		this.ctx.restore();
	},
	rightBtm:function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.fillStyle="#4db2e2";
		this.ctx.strokeStyle = "#9da6ac";
//		this.ctx.lineWidth=10;
		this.ctx.arc(250,250,180,0,Math.PI/2);
		this.ctx.lineTo(250,250);
		this.ctx.lineTo(430,250);
		this.ctx.stroke();
		this.ctx.fill();
		this.ctx.restore();
	},
	letfTop:function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.fillStyle="#4db2e2";
		this.ctx.strokeStyle = "#9da6ac";
//		this.ctx.lineWidth=10;
		this.ctx.arc(250,250,180,Math.PI,Math.PI*3/2);
		this.ctx.lineTo(250,250);
		this.ctx.lineTo(70,250);
		this.ctx.stroke();
		this.ctx.fill();
		this.ctx.restore();
	},
	bmwTit:function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.font="30px 微软雅黑";
		this.ctx.fillStyle= 'white';
		this.ctx.rotate(Math.PI/-135);
		this.ctx.translate(250,250)
		var bmw = ["B","M","W"]
		for(var i=0 ; i<bmw.length; i++){
			var x = Math.sin(Math.PI/6*i)*150,
				y = -Math.cos(Math.PI/6*i)*150;
		}
		this.ctx.fillText(bmw[0],x-300,y-60)
		this.ctx.fillText(bmw[1],x-150,y-120)
		this.ctx.fillText(bmw[2],x,y-60)
		
		this.ctx.fill()
		this.ctx.restore();
	}
}

var bmw = new Canvas();
bmw.init()
