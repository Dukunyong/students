function Round(){
	this.canvas = document.getElementById("canvas");
	this.ctx = this.canvas.getContext("2d");
}
Round.prototype = {
	constructor:Round,
	init:function(){
		this.arc();
		this.pointer();
		this.list();
	},
	arc:function(){
		this.ctx.save();
		this.ctx.beginPath();
		for(var i = 0;i<=12 ; i++){
			this.ctx.fillStyle= 'pink';
			this.ctx.strokeStyle = '#333';
			this.ctx.arc(250,250,230,0,Math.PI/6*i);
			this.ctx.lineTo(250,250);
			this.ctx.lineTo(450,250);
			this.ctx.fill();
			this.ctx.stroke();
		}
		this.ctx.restore();
	},
	pointer:function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.fillStyle= 'blue';
		this.ctx.translate(250,250);
		var angle = Math.PI*2;
		this.ctx.rotate(angle)
		this.ctx.rect(-2,-180,4,180);
		this.ctx.fill()
		this.ctx.restore();
	},
	list:function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250,250);
		this.ctx.font = '25px 微软雅黑';
		this.ctx.fillStyle= 'white';
		var list = ['唱歌','跳舞','打牌','喝酒','发呆','啦啦','哈哈','嘻嘻','臭美','想念','血拼','么么']
		for(var i=0;i<12;i++){
			var x = Math.sin(2*Math.PI/12*i)*160,
				y = -Math.cos(2*Math.PI/12*i)*160;
			this.ctx.fillText(list[i],x-30,y+10)
		}
		this.ctx.fill()
		this.ctx.restore();
	}

}
var gogogo = new Round();
gogogo.init()