function BMW(){
	this.BMW=document.getElementById("BMW");
	this.ctx=this.BMW.getContext("2d");
}
BMW.prototype={
	constructor:BMW,
	arc:function(){
		this.ctx.arc(250,250,110,0,Math.PI*2);
//		this.ctx.lineTo(250,250);
		this.ctx.fillStyle="#E8E8E8";
		this.ctx.strokeStyle="#989898";
		this.ctx.stroke();
		this.ctx.fill();
	},
	arc1:function(){
		this.ctx.beginPath();
		this.ctx.arc(250,250,100,0,Math.PI*2);
//		this.ctx.lineTo(250,250);
		this.ctx.fillStyle="#000";
		this.ctx.strokeStyle="#989898";
		this.ctx.stroke();
		this.ctx.fill();
		
	},
	arc2:function(){
		this.ctx.beginPath();
		this.ctx.arc(250,250,70,0,Math.PI*2);
//		this.ctx.lineTo(250,250);
		this.ctx.fillStyle="#FFF";
		this.ctx.strokeStyle="#989898";
		this.ctx.stroke();
		this.ctx.fill();
		
	},
	semi:function(){
		this.ctx.beginPath();
		this.ctx.arc(250,250,70,0,Math.PI/2);
		this.ctx.lineTo(250,250);
		this.ctx.lineTo(350,250);
		this.ctx.fillStyle="blue";
		this.ctx.strokeStyle="#989898";
		this.ctx.stroke();
		this.ctx.fill();
		
	},
	semi1:function(){
		this.ctx.beginPath();
		this.ctx.arc(250,250,70,Math.PI,Math.PI*3/2);
		this.ctx.lineTo(250,250);
		this.ctx.lineTo(350,250);
		this.ctx.fillStyle="blue";
		this.ctx.strokeStyle="#989898";
		this.ctx.stroke();
		this.ctx.fill();
	},
	text:function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(200,200);
		this.ctx.fillStyle="#FFF";
		this.ctx.font="25px 微软雅黑";
//		this.ctx.textBaseline="middle";
		this.ctx.rotate(-Math.PI/4);
		this.ctx.fillText("B",0,0);
		this.ctx.restore();
	},
	text1:function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(200,200);
		this.ctx.fillStyle="#FFF";
		this.ctx.font="25px 微软雅黑";
		this.ctx.fillText("M",38,-20);
		this.ctx.restore();
	},
	text2:function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(200,200);
		this.ctx.fillStyle="#FFF";
		this.ctx.font="25px 微软雅黑";
		this.ctx.rotate(Math.PI/4);
		this.ctx.fillText("W",52,-72);
		this.ctx.restore();
	}
}
var BMW=new BMW();
BMW.arc();
BMW.arc1();
BMW.arc2();
BMW.semi();
BMW.semi1();
BMW.text();
BMW.text1();
BMW.text2();
//BMW.semi2();
//BMW.semi3();