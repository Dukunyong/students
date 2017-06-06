function Canvas(){
	this.canvas = document.getElementById("canvas");
	this.ctx = this.canvas.getContext("2d");
}

Canvas.prototype = {
	constructor:Canvas,
	
	createImg:function(){
		var img = new Image();
		var _this = this;
		img.onload = function(){
			_this.ctx.drawImage(img,0,0,200,200);
		}
		
		img.src = "img/小红帽.jpg";
	},
	CreateImg:function(){
		var img = new Image();
		var _this = this;
		img.onload = function(){
			_this.ctx.drawImage(img,200,0,200,200);
		}
		
		img.src = "img/小懒猫.png";
	},
	CreateIMG:function(){
		var img = new Image();
		var _this = this;
		img.onload = function(){
			_this.ctx.drawImage(img,0,200,200,200);
		}
		
		img.src = "img/1.png";
	},
	CREATEIMG:function(){
		var img = new Image();
		var _this = this;
		img.onload = function(){
			_this.ctx.drawImage(img,200,200,200,200);
		}
		
		img.src = "img/psb.jpg";
	}
	
}
var canvas = new Canvas();
canvas.createImg();
canvas.CreateImg();
canvas.CreateIMG();
canvas.CREATEIMG();
