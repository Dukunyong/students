function Happy(){
	this.canvas = document.getElementById("canvas");
	this.ctx = this.canvas.getContext("2d");
}

Happy.prototype = {
	constructor:Happy,
	init:function(){
		this.shadow();
		this.miss();
		this.test();
	},
	shadow:function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.fillStyle = "#ccc";
		this.ctx.beginPath();
		this.ctx.fillRect(0,0,500,700);
		this.ctx.closePath();
		this.ctx.restore();
	},
	miss:function(){
		var this_ = this;
		this.canvas.onmousemove = function(e){
			var x = e.pageX - this_.canvas.offsetLeft;
			var y = e.pageY - this_.canvas.offsetTop;
			this_.ctx.save();
			this_.ctx.beginPath();
			this_.ctx.globalCompositeOperation = "destination-out";
			this_.ctx.beginPath();
			this_.ctx.fillStyle = "mistyrose";
			this_.ctx.arc(x,y,35,0,2*Math.PI,true);
			this_.ctx.fill();
			this_.ctx.closePath();
//			this_.ctx.restore();
		}
	},
	test:function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.font="30px 微软雅黑";
		this.ctx.fillStyle= 'white';
		this.ctx.translate(250,150)
//		this.ctx.rotate(Math.PI/6);
		var bmw = ["我","最","亲",'爱','的']
		for(var i=0 ; i<bmw.length; i++){
			var x = Math.sin(Math.PI/6*i),
				y = Math.cos(Math.PI/6*i);
		}
		this.ctx.fillText(bmw[0],x,y+60)
		this.ctx.fillText(bmw[1],x,y+120)
		this.ctx.fillText(bmw[2],x,y+180)
		this.ctx.fillText(bmw[3],x,y+240)
		this.ctx.fillText(bmw[4],x,y+300)
		
		this.ctx.fill()
		this.ctx.restore();
		
	}
}

var me = new Happy();
me.init();