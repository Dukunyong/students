function Canvas(){
	this.canvas=document.getElementById("canvas");
	this.ctx=this.canvas.getContext("2d");
}
Canvas.prototype={
	constructor:Canvas,
//	init:function(){
//		
//		this.ctx.moveTo(10,20);//从10 20的点
//		this.ctx.lineTo(100,100);//画到100 100
//		this.ctx.stroke();//连接两个点
//		
//	}
	rect:function(){
		//
		this.ctx.fillStyle="pink";
		this.ctx.strokeStyle="red";
		
		this.ctx.rect(0,0,200,200);
		//绘制矩形边框
		this.ctx.stroke();
		this.ctx.fill();
	},
	arc:function(){
		//绘制圆形
//		this.ctx.arc(250,250,100,0,Math.PI*2);
//		this.ctx.stroke();
		//创建弧形
//		this.ctx.fillStyle="#000";
//		this.ctx.arc(250,250,100,0,Math.PI/2);
//		this.ctx.lineTo(250,250);//从上一个的结尾连接到250，250这个点
//		this.ctx.lineTo(350,250);//从上一个的结尾连接到350，250这个点
//		this.ctx.stroke();
//		this.ctx.fill();
		//创建四分之三弧形
		this.ctx.fillStyle="gray";
		this.ctx.strokeStyle="red";
		this.ctx.arc(250,250,100,0,Math.PI*3/2);
		this.ctx.lineTo(250,250);//从上一个的结尾连接到250，250这个点    又上一个的路径的终点连线到x，y这个点
		this.ctx.lineTo(350,250);//从上一个的结尾连接到350，250这个点
		this.ctx.stroke();
		this.ctx.fill();
	},
	quadraticCurveTo:function(){
		this.ctx.moveTo(250,250);
		this.ctx.quadraticCurveTo(20,100,0,0);
		this.ctx.stroke();

	},
	//贝塞尔曲线
	bezierCurveTo:function(){
		this.ctx.moveTo(0,500);
		this.ctx.bezierCurveTo(100,0,400,500,500,0);
		this.ctx.stroke();

	},
	closePath:function(){
		this.ctx.fillStyle="gray";
		this.ctx.strokeStyle="red";
		this.ctx.arc(250,250,100,0,Math.PI*3/2);
		this.ctx.closePath();//自动找到首尾做路径闭合
		this.ctx.stroke();
		this.ctx.fill();

	},
	beginPath:function(){
//		this.ctx.moveTo(100,100);
//		this.ctx.lineTo(250,250);//从上一个的结尾连接到350，250这个点
//		this.ctx.beginPath();
//		this.ctx.moveTo(200,100);
//		this.ctx.lineTo(350,250);//从上一个的结尾连接到350，250这个点
//		this.ctx.stroke();
//		this.ctx.moveTo(0,0);
//		this.ctx.lineTo(300,300);//从上一个的结尾连接到350，250这个点
//		this.ctx.stroke();


//
//		this.ctx.arc(250,250,100,0,Math.PI*2);
//		this.ctx.lineTo(100,100);//从上一个的结尾连接到350，250这个点
//		this.ctx.stroke();
	},
	//设置路径宽度
	lineWidth:function(){
		this.ctx.lineWidth=10;
		this.ctx.moveTo(100,100);
		this.ctx.lineTo(200,200);
		this.ctx.stroke();
	},
	//设置路径笔头
	lineCap:function(){
//		this.ctx.lineCap="round";//圆的
		//square变成butt的时候，线段变短
		this.ctx.lineCap="square";//方的
		this.ctx.lineWidth=20;
		this.ctx.moveTo(100,100);
		this.ctx.lineTo(100,200);
		this.ctx.stroke();
//		对比square和butt
		this.ctx.lineCap="butt";//方的
		this.ctx.lineWidth=20;
		this.ctx.moveTo(200,100);
		this.ctx.lineTo(200,200);
		this.ctx.stroke();
	},
	font:function(){
		this.ctx.font="100px 微软雅黑";
		this.ctx.fillText("泽宇",100,200);//实心字体
		this.ctx.strokeText("泽宇",300,200);//空心字体
		
	},
	textAlign:function(){
		this.ctx.lineWidth=10;
		this.ctx.moveTo(100,100);
		this.ctx.lineTo(100,250);
		this.ctx.stroke();
		this.ctx.textAlign="center";//居中对齐
		this.ctx.font="100px 微软雅黑";
		this.ctx.fillText("泽宇",100,200);//实心字体
		
	},
	measureText:function(){
//		this.ctx.lineWidth=10;
		this.ctx.moveTo(100,100);
		this.ctx.lineTo(100,200);
		this.ctx.stroke();
		this.ctx.font="60px 微软雅黑";
		var width=this.ctx.measureText("泽宇").width;
		this.ctx.fillText("泽宇",100-width/2,200);//实心字体
	},
	drawImage:function(){
		var img= new Image();
		var that=this;
		img.onload=function(){
			that.ctx.drawImage(img,50,0,200,100,0,0,200,100);
		}
		img.src="http://www.easyvoa.com/templets/images/newlogo.png";
		
		var img1= new Image();
		img1.onload=function(){
			that.ctx.drawImage(img1,0,0,200,300,0,100,200,300);
		}
		img1.src="http://www.easyvoa.com/templets/images/newlogo.png";
		console.log(img);
	},
	textBaseline:function(){
//		this.ctx.lineWidth=10;
		this.ctx.moveTo(100,100);
		this.ctx.lineTo(200,100);
		this.ctx.stroke();
		this.ctx.font="40px 微软雅黑";
		this.ctx.textBaseline="middle";
		this.ctx.fillText("泽宇",100,100);//实心字体
	},
	shadow:function(){
		this.ctx.shadowColor="red";
		this.ctx.shadowBlur=20;
		this.ctx.shadowOffsetX=10;
		this.ctx.rect(100,100,100,100);
		this.ctx.fill();
	},
	createLinearGradient:function(){
		var grd=this.cxt.createLinearGradient(0,0,500,500);
		addColorStop(0,'red');
		addColorStop(1,'green');
		this.ctx.fillStyle=grd;	
		this.ctx.rect(0,0,500,500);
		this.ctx.fill();
	},
	clearReck:function(){
		this.ctx.fillStyle="blue";	
		this.ctx.rect(0,0,200,200);
		this.ctx.fill();
		this.ctx.clearReck(0,0,200,200);
		
	},
	toDataURL:function(){
		this.ctx.fillStyle="blue";	
		this.ctx.rect(0,0,100,100);
		this.ctx.fill();
		console.log(this.canvas.toDataURL());
	},
	translate:function(){
		this.ctx.translate(100,100);//几点
		this.ctx.moveTo(100,100);
		this.ctx.lineTo(200,100);
		this.ctx.stroke();
	},
	rotate:function(){
		this.ctx.rotate(Math.PI/6);
		this.ctx.rect(300,0,100,100);
		this.ctx.fill();
		
	},
	saveAndRestore:function(){
		this.ctx.save();
		this.ctx.rotate(Math.PI/6);
		this.ctx.rect(300,0,100,100);
		this.ctx.fill();
		this.ctx.restore();//画布恢复
		this.ctx.beginPath();
		this.ctx.rotate(Math.PI/6);
		this.ctx.rect(300,0,100,100);
		this.ctx.fill();
	}
}
var canvas=new Canvas();
//canvas.toDataURL();
//canvas.init()
//canvas.rect();
//canvas.arc();
//canvas.quadraticCurveTo();
//canvas.bezierCurveTo();
//canvas.closePath();
//canvas.beginPath();
//canvas.lineWidth();
//canvas.lineCap();
//canvas.font();
//canvas.textAlign();
//canvas.measureText();
canvas.drawImage();
//canvas.textBaseline();
//canvas.shadow();
//canvas.createLinearGradient();//没写完
//canvas.clearReck();//没写完
//canvas.translate();
//canvas.rotate();
//canvas.saveAndRestore();