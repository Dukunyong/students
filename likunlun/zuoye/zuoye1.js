function Canvas(){
	this.canvas = document.getElementById("canvas");
	this.ctx = this.canvas.getContext("2d");
}


Canvas.prototype = {
	constructor:Canvas,
	drawImage:function(){
		
		var img = new Image(),
		this_ = this;
		img.onload = function(){
			this_.ctx.drawImage(img,0,0,300,100,50,100,300,100)
		}
		img.src = "http://www.easyvoa.com/templets/images/newlogo.png";
		var img1 = new Image(),
		that = this;
		img1.onload = function(){
			that.ctx.drawImage(img1,0,0,400,250,280,100,50,81);
		}
		img1.src = "http://img3.imgtn.bdimg.com/it/u=2891202188,1990388693&fm=26&gp=0.jpg";
	}
}


var canvas = new Canvas();
canvas.drawImage()