function Zp(){
	this.canvas = document.querySelector('#canvas');
	this.ctx = this.canvas.getContext('2d');
	this.btn = document.querySelector('.btn')
	/*console.log(this.edg)*/
}
Zp.prototype = {
	constructor: Zp,
	btnClick:function(){
		var _this= this;
		this.btn.onclick = function(){
			_this.init();
		}
	},
	init:function(){
		this.edg = 0;
		var endTime = parseInt(Math.random()*10+60)*-1;
		var _this = this;
		this.speed = 0.2;
		var timer = setInterval(function(){
			_this.speed = _this.speed-0.00001;
			_this.edg = _this.edg-_this.speed;

			console.log(_this.edg, endTime);
			_this.clearCanvas();
			_this.creatZp();
			_this.creatSx1();
			_this.creatSx2();
			_this.creatSx3();
			_this.creatSx4();
			_this.creatPoint();
			if(_this.edg <= endTime){
				clearInterval(timer);
			}
		},1)
		
		
	},
	clearCanvas:function(){
		this.ctx.clearRect(0,0,500,500)
	},
	creatZp: function(){
		this.ctx.fillStyle = '#eee';
		this.ctx.strokeStyle = '#333';
		this.ctx.arc(250,250,200,0,2*Math.PI);
		this.ctx.stroke();
		this.ctx.fill();
	},
	creatSx1:function(){
		this.ctx.fillStyle = 'pink';
		this.ctx.arc(250,250,200,0,Math.PI/2);
		this.ctx.strokeStyle = '#ccc'
		this.ctx.lineWidth = 1;
		this.ctx.lineCap = "butt";
		this.ctx.lineTo(250,250)
		this.ctx.lineTo(250+200,250)
		this.ctx.stroke();
		this.ctx.fill();
		this.ctx.beginPath();
	},
	creatSx2:function(){
		this.ctx.fillStyle = 'yellow';
		this.ctx.arc(250,250,200,Math.PI/2,Math.PI);
		this.ctx.strokeStyle = '#ccc'
		this.ctx.lineWidth = 1;
		this.ctx.lineCap = "butt";
		this.ctx.lineTo(250,250)
		this.ctx.lineTo(250,250+200)
		this.ctx.stroke();
		this.ctx.fill();
		this.ctx.beginPath();
	},
	creatSx3:function(){
		this.ctx.fillStyle = '#017cc2';
		this.ctx.arc(250,250,200,Math.PI,Math.PI*3/2);
		this.ctx.strokeStyle = '#ccc'
		this.ctx.lineWidth = 1;
		this.ctx.lineCap = "butt";
		this.ctx.lineTo(250,250)
		this.ctx.lineTo(250-200,250)
		this.ctx.stroke();
		this.ctx.fill();
		this.ctx.beginPath();
	},
	creatSx4:function(){
		this.ctx.fillStyle = 'white';
		this.ctx.arc(250,250,200,Math.PI*3/2,Math.PI*2);
		this.ctx.strokeStyle = '#ccc'
		this.ctx.lineWidth = 1;
		this.ctx.lineCap = "butt";
		this.ctx.lineTo(250,250)
		this.ctx.lineTo(250,250-200)
		this.ctx.stroke();
		this.ctx.fill();
	},
	creatPoint:function(){
		this.ctx.beginPath();
		this.ctx.save();
		this.ctx.fillStyle = '#000'
		this.ctx.translate(250,250);
		var angle = (this.edg);
		this.ctx.rotate(angle);
		this.ctx.rect(-2,-160,4,160);
		this.ctx.fill();
		this.ctx.restore();
	}
}
var zp = new Zp();
zp.btnClick();