function Canvas(canvasElem){
	this.canvas=canvasElem;
	this.ctx=this.canvas.getContext("2d");
}
Canvas.prototype={
	constructor:Canvas,
	init:function(){
		this.inRect();
	},
	inRect:function(){
		this.ctx.beginPath();
		this.ctx.fillStyle="#ccc";
		this.ctx.rect(0,0,200,100);
		this.ctx.fill();
		var this_=this;
		this.canvas.onmousemove=function(evt){
			var e=evt||event;
			var x=e.offsetX;
			var y=e.offsetY;
			this_.ctx.beginPath();
			// this_.ctx.gloablCompositeOperation="destination-out";
			// this_.ctx.arc(x,y,10,0,Math.PI*2);
			this_.ctx.clearRect(x,y,10,10,)
			this_.ctx.fill();
		}
	}
}