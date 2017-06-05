function Canvas(){
	this.canvas = document.querySelector('#canvas');
	this.ctx = this.canvas.getContext('2d');
}
Canvas.prototype = {
	constructor: Canvas,
	rect:function(){
		this.ctx.fillStyle = 'green';
		this.ctx.strokeStylr = 'red'
		this.ctx.rect(0,0,200,200);
		this.ctx.stroke();
		this.ctx.fill();

/*
		this.ctx.moveTo(10,20);
		this.ctx.lineTo(100,100);
		this.ctx.stroke();*/
	},
	arc:function(){
		 this.ctx.fillStyle = 'green';
		// this.ctx.strokeStylr = 'red'
		this.ctx.arc(250,250,100,0,Math.PI/2);
		
		this.ctx.lineTo(250,250)
		this.ctx.lineTo(350,250)
		this.ctx.stroke();
		this.ctx.fill();
	},
	quadraticCurveTo:function(){
		this.ctx.moveTo(250,250);
		this.ctx.quadraticCurveTo(20,100,0,0);
		this.ctx.stroke();
	},
	bezierCurveTo:function(){
		this.ctx.moveTo(0,500);
		this.ctx.bezierCurveTo(100,0,400,500,500,0)
		this.ctx.stroke();
	},
	closePath:function(){
		 this.ctx.fillStyle = 'green';
		// this.ctx.strokeStylr = 'red'
		this.ctx.arc(250,250,100,0,Math.PI*3/2);
		this.ctx.closePath();
		this.ctx.stroke();
		this.ctx.fill();
	},
	beginPath:function(){
		this.ctx.moveTo(100,100)
		this.ctx.lineTo(250,250)
		this.ctx.moveTo(200,100)
		this.ctx.lineTo(350,250)
		this.ctx.stroke()

		this.ctx.beginPath()
		this.ctx.moveTo(0,0)
		this.ctx.lineTo(300,300)
		this.ctx.stroke()
	},
	lineWidth:function(){
		this.ctx.lineWidth = 10;
		this.ctx.moveTo(100,100);
		this.ctx.lineTo(200,200);
		this.ctx.stroke()

	},
	lineCap:function(){
		// square =>buff  线会变短
		this.ctx.lineCap = 'round'
		this.ctx.lineWidth = 10;
		this.ctx.moveTo(100,100);
		this.ctx.lineTo(200,200);
		this.ctx.stroke()

	},
	font:function(){
		this.ctx.font = '40px 微软雅黑';
		this.ctx.fillText('啊啊啊',100,100);
		this.ctx.font = '40px 微软雅黑';
		this.ctx.strokeText('啊啊啊',200,200)
	},
	textAlign:function(){
		this.ctx.moveTo(100,100);
		this.ctx.lineTo(100,200);
		this.ctx.stroke();
		this.ctx.textAlign ='center'
		this.ctx.font = '40px 微软雅黑';
		this.ctx.fillText('啊啊啊',100,100);
	},
	measureText:function(){
		this.ctx.moveTo(100,100);
		this.ctx.lineTo(100,200);
		this.ctx.stroke();
		this.ctx.font = '40px 微软雅黑';
		var width = this.ctx.measureText('啊啊啊').width;
		this.ctx.fillText('啊啊啊',100-width/2,100);
	},
	drawImage:function(){
		var img = new Image();
		var _this = this;
		img.onload = function(){
			_this.ctx.drawImage(img,0,0,800,800,0,100,500,500)
		}
		img.src = 'https://imgsa.baidu.com/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=462e8a6d0eb30f242197e451a9fcba26/d62a6059252dd42a159320a7023b5bb5c9eab827.jpg'
	},
	textBaseline:function(){
		this.ctx.moveTo(100,100);
		this.ctx.lineTo(200,100);
		this.ctx.textBaseline = 'middle';
		this.ctx.font = '40px 微软雅黑';
		this.ctx.fillText('M',230,170);
	},
	shadow:function(){
		this.ctx.shadowColor="red";
		this.ctx.shadowBlur=20;
		this.ctx.rect(100,100,100,100);
		this.ctx.fill();

	},
	creatLinearGradient:function(){
		var grd = this.ctx.createLinearGradient(0,0,500,500);
		grd.addColorStop(0,'red');
		grd.addColorStop(1,'green');
		this.fillStyle = grd;
		this.ctx.rect(100,100,100,100);
		this.ctx.fill();
	},
	clearRect: function(){
		this.ctx.rect(0,0,100,100);
		this.ctx.fill();
		this.ctx.clearRect(0,0,100,100);
	},
	toDataURL: function(){
		this.ctx.rect(0,0,100,100);
		this.ctx.fill();
		console.log(this.canvas.toDataURL());
	},
	translate: function(){
		this.ctx.translate(100,100)
		this.ctx.moveTo(100,100);
		this.ctx.lineTo(200,200);
		this.ctx.stroke();
	},
	rotate:function(){
		this.ctx.rotate(Math.PI/6)
		this.ctx.rect(300,0,100,100);
		this.ctx.fill();
	},
	savendRestore: function(){
		this.ctx.save();
		this.ctx.rotate(Math.PI/6)
		this.ctx.fillStyle = 'pink'
		this.ctx.rect(300,0,100,100);
		this.ctx.restore();
		this.ctx.fill();
		this.ctx.beginPath();
		this.ctx.rotate(Math.PI/6)
		this.ctx.rect(300,0,100,100);
		this.ctx.fill();
	}
}
var canvas = new Canvas();
canvas.drawImage();