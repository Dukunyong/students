function Canvas(canvas){
	this.canvas=canvas;
	this.ctx=this.canvas.getContext("2d");
}
Canvas.prototype={
	constructor:Canvas,
	init:function(){
		this.outside();
		this.middle();
		this.inside();
		this.sector();
		this.font();
	},
	outside:function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.fillStyle="#eee";
		this.ctx.arc(250,250,200,0,Math.PI*2);
		this.ctx.fill();
		this.ctx.restore();
	},
	middle:function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.fillStyle="#2d1515";
		this.ctx.arc(250,250,190,0,Math.PI*2);
		this.ctx.fill();
		this.ctx.translate(250,250);
		this.ctx.restore();
	},
	font:function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.font="60px 微软雅黑";
		this.ctx.fillStyle="#fff";
		this.ctx.translate(250,250);
		var bmw = ["B","M","W"]
		var arr=[-1,0,1]
		for(var i=0;i<bmw.length;i++){
			this.ctx.save();
			this.ctx.beginPath();
			var x=Math.sin(Math.PI/6*0)*135;
			var y=-Math.cos(Math.PI/6*0)*135; 
			this.ctx.rotate(50*arr[i]*Math.PI/180);
			var width = this.ctx.measureText(bmw[i]).width;
			this.ctx.fillText(bmw[i],x-width/2,y+5);
			this.ctx.restore();
		}
		this.ctx.fill();
		this.ctx.restore();
	},
	inside:function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.fillStyle="#dedadb";
		this.ctx.arc(250,250,125,0,Math.PI*2);
		this.ctx.fill();
		this.ctx.restore();
	},
	sector:function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.fillStyle="#0070bc";
		this.ctx.arc(250,250,115,Math.PI*3/2,Math.PI,true);
		this.ctx.lineTo(250,250);
		this.ctx.fill();
		this.ctx.beginPath();
		
		this.ctx.fillStyle="#0070bc";
		this.ctx.arc(250,250,115,Math.PI/2,0,true);
		this.ctx.lineTo(250,250);
		this.ctx.fill();
		this.ctx.restore();
	}
}








