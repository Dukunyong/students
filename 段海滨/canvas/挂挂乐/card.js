function Canvas(canvasElement){
	this.canvas = canvasElement;
	this.ctx = this.canvas.getContext('2d');
	
}
Canvas.prototype={
	constructor:Canvas,
	init:function(){
		this.rect();
//		this.rect2();
		this.onmousemove();
	},
//	drawImage:function(){
//		var img = new Image();
//		var _this = this;
//		img.src="img/timg.jpg";
//		img.onload = function(){
//			_this.ctx.drawImage(img,0,0)
//		}
//	},
	
	rect:function(){
		this.ctx.fillStyle="green";
		this.ctx.rect(21,175,280,160);
		this.ctx.fill();
		this.ctx.beginPath();
		this.ctx.fillStyle="#000";
		this.ctx.font="20px 微软雅黑";
		this.ctx.fillText("恭喜发财",110,270);
	},
//	rect2:function(){
//		this =this;
//		this.ctx.beginPath();
//		this.ctx.fillStyle="#000";
//		this.ctx.rect(21,175,280,160);
//		this.ctx.fill();
////		this.closePath();
//	}
	onmousemove:function(e){
//		console.log(this.canvas);
		var _this = this;
		this.canvas.onmousemove = function(e){
			var x = e.pageX - this.offsetLeft;  
			var y = e.pageY - this.offsetTop;  
	  
			_this.ctx.globalCompositeOperation = "destination-out";  
			_this.ctx.beginPath(); 
			_this.ctx.fillStyle = "red";  
			_this.ctx.arc(x,y,10,0,2*Math.PI,true);  
			_this.ctx.fill();  
			_this.ctx.closePath();  
		}
	}	



//	onmousemove:function(){
//		console.log(this);
//		var _this = this;
//		this.onmousemove = function(e){
//			var x = e.pageX - _this.offsetLeft;  
//			var y = e.pageY - _this.offsetTop;  
//	  
//			_this.ctx.globalCompositeOperation = "destination-out";  
//			_this.ctx.beginPath(); 
//			_this.ctx.fillStyle = "red";  
//			_this.ctx.arc(x,y,10,0,2*Math.PI,true);  
//			_this.ctx.fill();  
//			_this.ctx.closePath();  
//		}
//		
//	}
	
}
