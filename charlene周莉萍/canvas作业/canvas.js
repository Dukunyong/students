function Canvas(canvasElem){
	this.canvas = canvasElem;
	this.ctx = this.canvas.getContext("2d");
}
Canvas.prototype = {
	constructor:Canvas,
	
	init:function(){
		this.BMW();
//		this.drawImage();
	},
	BMW:function(){
		this.outsideCircular();
		this.middleCircular();
		this.insideContent();	
		this.wordB();
		this.wordM();
		this.wordW();
	},
	outsideCircular:function(){
		this.ctx.save();
		this.ctx.strokeStyle="#bac4cd";
		this.ctx.lineWidth="5";
		this.ctx.arc(500,200,100,0,Math.PI*2);
		this.ctx.stroke();
		this.ctx.restore();
		
	},
	middleCircular:function(){
		this.ctx.beginPath();
		this.ctx.save();
		this.ctx.strokeStyle="#000";
		this.ctx.lineWidth="40";
		this.ctx.arc(500,200,78,0,Math.PI*2);
		this.ctx.stroke();
		this.ctx.restore();
		
	},
	insideContent:function(){
		this.ctx.beginPath();
		this.ctx.save();
		this.ctx.fillStyle = "#3380ae";
		this.ctx.lineWidth="1";
		for (var i = 0 ; i<2;i++) {
			this.ctx.arc(500,200,56,i*Math.PI,Math.PI*(1/2+i));
			this.ctx.lineTo(500,200);
			this.ctx.lineTo(558,200);
		}
		this.ctx.fill();
		this.ctx.stroke();
		this.ctx.restore();
		
	},
	
	wordB:function(){
		this.ctx.beginPath();
		this.ctx.save();
		this.ctx.fillStyle="#fff";
		this.ctx.translate(500,200)
		this.ctx.rotate(-45*Math.PI/180);
		this.ctx.font = "46px 微软雅黑";
		this.ctx.fillText("B",-35,-58);
		this.ctx.stroke();
		this.ctx.restore();
	},
	wordM:function(){
		this.ctx.beginPath();
		this.ctx.save();
		this.ctx.fillStyle="#fff";
		this.ctx.translate(500,200)
//		this.ctx.rotate(-30*Math.PI/180);
		this.ctx.font = "40px 微软雅黑";
		this.ctx.fillText("M",-20,-60);
		this.ctx.stroke();
		this.ctx.restore();
	},
	wordW:function(){
		this.ctx.beginPath();
		this.ctx.save();
		this.ctx.fillStyle="#fff";
		this.ctx.translate(500,200)
		this.ctx.rotate(45*Math.PI/180);
		this.ctx.font = "40px 微软雅黑";
		this.ctx.fillText("W",5,-58);
		this.ctx.stroke();
		this.ctx.restore();
	},
	drawImage:function(){
		//作业，载入两张图片，画在一张canvas上
		var img1 = new Image();//创建图片
		this_ = this;
		img1.onload = function(){
			this_.ctx.drawImage(img1,0,0,300,100,100,0,300,100);
			
		}
		this.ctx.beginPath();//启动新路径
		var img2 = new Image();//创建图片
		img2.onload = function(){
			this_.ctx.drawImage(img2,0,0,641,558,100,100,641,558);
			
		}
		this.ctx.beginPath();//启动新路径
		var img3 = new Image();//创建图片
		img3.onload = function(){
			this_.ctx.drawImage(img3,0,0,220,300,100,330,220,300);
			
		}
		img1.src = "http://www.easyvoa.com/templets/images/newlogo.png";
		img2.src = "https://f12.baidu.com/it/u=1512992334,3113031907&fm=72";
		img3.src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3358882827,222262599&fm=26&gp=0.jpg"
	}
}

