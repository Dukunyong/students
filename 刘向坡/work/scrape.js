function Canvas(canvas){
	this.canvas=canvas;
	this.ctx=this.canvas.getContext("2d");
}
Canvas.prototype={
	constructor:Canvas,
	init:function(){
		this.font()
		this.eraser();
	},
	font:function(){
		this.ctx.fillStyle="#ccc";
		this.ctx.rect(0,0,500,200);
		this.ctx.fill(); 
	},
	eraser:function(){
		var this_ = this;
		this.canvas.onmousemove = function(e){
			var x=e.pageX-this_.canvas.offsetLeft;
			var y=e.pageY-this_.canvas.offsetTop;
			this_.ctx.save();
			this_.ctx.beginPath();
			this_.ctx.globalCompositeOperation="destination-out";
			this_.ctx.fillStyle="mistyrose";
			this_.ctx.arc(x,y,30,0,2*Math.PI,true);
			this_.ctx.fill();
		}
	}
}








