function Turntable(turnTableElem){
	this.turntable = turnTableElem;
	this.ctx = this.turntable.getContext("2d");
}
Turntable.prototype={
	constructor : Turntable,
	init:function(){
		this.picture();
		this.rotates(img);
	},
	
	picture:function(){
		this.ctx.beginPath();
		this.ctx.save();
		img = new Image();
		this_ = this;
		img.onload=function(){
			this_.ctx.drawImage(img,0,10,650,728,0,10,650,728)
		}
		img.src="http://taobao.90sheji.com/58pic/19/83/69/90a58PICyeI.jpg!/fwfh/650x728/quality/90/unsharp/true/compress/true/format/webp";
		this.ctx.restore();
	},
	
	rotates:function(img){
		this.img = img;
		this.ctx.beginPath();
		this.ctx.save();
		this.ctx.fillStyle="blue";
		var btn = document.getElementById("btn");
		this_ = this;
		console.log(this.img)
		btn.onclick=function(){
			setInterval(function(){
				this_.ctx.translate(300,100);
				this_.ctx.rotate(30*Math.PI/180);
				this_.img;
				
			},500)
		}
		this.ctx.restore();
	}
	
	
}
