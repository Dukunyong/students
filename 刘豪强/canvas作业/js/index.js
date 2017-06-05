function Canvas(){
	this.canvas=document.getElementById("canvas");
	this.ctx=this.canvas.getContext("2d");
};
Canvas.prototype={
	constcuctor:Canvas,
	init:function(){
		this.bigborder();
		this.smallborder();
		this.neihuan();
		this.wenzi();
		
	},
	bigborder:function(){
		this.ctx.save()
		this.ctx.arc(250,250,200,0,Math.PI*2);
		this.ctx.lineWidth=5;	
		this.ctx.strokeStyle="blue";
		this.ctx.fill();
		this.ctx.stroke();
		this.ctx.restore();
	},
	smallborder:function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.arc(250,250,150,0,Math.PI*2);
		this.ctx.fillStyle="#fff";
		this.ctx.lineWidth=1;
		this.ctx.fill();
		this.ctx.stroke();
		this.ctx.restore();
	},
	neihuan:function(){
		this.ctx.save();
		this.ctx.beginPath();		
		for(var i=0;i<4;i++){
			this.ctx.save();
		    this.ctx.beginPath();
			this.ctx.arc(250,250,145,Math.PI/2*i,Math.PI/2+Math.PI/2*i);
			i%2==0?this.ctx.fillStyle="blue":this.ctx.fillStyle="#fff";
		    this.ctx.lineTo(250,250);
		    this.ctx.strokeStyle="#fff";
			this.ctx.stroke();
			this.ctx.fill();
			this.ctx.restore();			
		}	
	},
	wenzi:function(){
		this.ctx.font="40px 微软雅黑";
		this.ctx.translate(250,250);
		this.ctx.rotate(-Math.PI/4);
		this.ctx.fillStyle="#fff";
		this.ctx.fillText("B",0,-155);
		this.ctx.restore();
		
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.font="40px 微软雅黑";
		this.ctx.translate(250,250);
		this.ctx.fillStyle="#fff";
		this.ctx.fillText("M",-20,-155);
		this.ctx.restore();
		
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.font="40px 微软雅黑";
		this.ctx.translate(250,250);
		this.ctx.rotate(Math.PI/4);
		this.ctx.fillStyle="#fff";
		this.ctx.fillText("W",0,-155);
		this.ctx.restore();
	}
	
}
var dry=new Canvas();
dry.init();
function Canvas2(){
	this.canvas2=document.getElementById("canvas2");
	this.ctx2=this.canvas2.getContext("2d");	
}
Canvas2.prototype={
	constructor:Canvas2,
	init:function(){
		this.omg();		
	},
	omg:function(){
		var img=new Image();
		var img2=new Image();
		img.src="img/f4min5.jpg";
		img2.src="img/f3min2.jpg";
		var this_=this;
		img.onload=function(){			
			this_.ctx2.drawImage(img,50,50,400,400);
			this_.ctx2.drawImage(img2,0,0,400,400,50,50,100,100)
		}
	}
}
var draw=new Canvas2();
draw.init();
